import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { Buffer } from "buffer";
import { Connection, Transaction } from "@solana/web3.js";

const Create = () => {
  const [formData, setFormData] = useState({
    image: null,
    tokenName: "",
    tokenSymbol: "",
    decimals: "",
    supply: "",
    description: "",
    checkFreeze: false,
    checkMint: false,
    checkUpdate: false,
    publicKey: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!window.solana || !window.solana.isPhantom) {
      console.error("Phantom Wallet is not installed!");
      return;
    }

    try {
      // Connect to Phantom Wallet
      const wallet = await window.solana.connect();
      const pubKey = wallet.publicKey.toString();

      // Step 1: Request the transaction from the backend
      const txResponse = await fetch("http://localhost:8080/create-token-tx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          publicKey: pubKey,
          checkFreeze: formData.checkFreeze,
          checkMint: formData.checkMint,
          checkUpdate: formData.checkUpdate,
        }),
      });

      const txData = await txResponse.json();
      if (!txData.transaction) throw new Error("Invalid transaction data");

      // Step 2: Deserialize and sign the transaction
      const transactionBuffer = Buffer.from(txData.transaction, "base64");
      const transaction = Transaction.from(transactionBuffer);
      const signedTransaction = await window.solana.signTransaction(
        transaction
      );

      // Step 3: Prepare form data
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null) {
          if (key === "image" && formData.image) {
            formDataToSend.append("image", formData.image);
          } else if (key === "publicKey") {
            formDataToSend.append(key, pubKey);
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
      });

      // Add the user's public key and signed transaction to the form data
      formDataToSend.append(
        "signedTransaction",
        signedTransaction.serialize().toString("base64")
      );

      // Step 4: Send the form data and signed transaction to the backend
      const finalResponse = await fetch("http://localhost:8080/create-token", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await finalResponse.json();
      console.log("Server Response:", result);

      if (finalResponse.ok) {
        console.log("Token creation successful!");
      } else {
        console.error("Token creation failed:", result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-black text-white relative font-['Product Sans']">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded-[30px] bg-[#23232333] border border-[#343434] text-white p-8 w-auto xl:mx-auto max-w-6xl mx-3 relative">
        <h1 className="text-3xl md:text-5xl font-semibold text-center uppercase">Create Solana Token</h1>
        <p className="text-md md:text-xl text-gray-400 text-center mt-4">Easily Create your own Solana SPL Token in just 7+1 steps without Coding.</p>

        <div className='items-center flex-col flex justify-between'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

            <div className="grid grid-cols-1 gap-6 mt-6">
              <label htmlFor="imageUpload" className="cursor-pointer">
                <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6 text-center">
                  {formData.image ? (
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Uploaded"
                      className="mx-auto rounded-lg w-40 h-40 object-cover"
                    />
                  ) : (
                    <img src="./imageupload.svg" alt="Upload" className="mx-auto" />
                  )}
                  <p className="text-3xl font-semibold mt-2">Upload Image</p>
                  <p className="text-[#7D7D7D] text-xl mt-1">
                    Most tokens require a 1000x1000 logo
                  </p>
                </div>
                <input
                  type="file"
                  id="imageUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>

              <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6 text-left space-y-8">
                <p className="text-2xl font-semibold mb-4">Add Link for Token Metadata</p>

                <div className="flex flex-col">
                  <label className="text-lg">Twitter or X Link</label>
                  <input type="text" placeholder="Twitter URL" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Telegram Link</label>
                  <input type="text" placeholder="Telegram URL" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Website Link</label>
                  <input type="text" placeholder="Website URL" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 gap-6 mt-6">
              <div className="bg-[#232323] w-full p-6 md:p-10 rounded-[30px] mt-6 space-y-4">
                <div className="flex flex-col">
                  <label className="text-lg">Token Name</label>
                  <input
                    type="text"
                    name="tokenName"
                    placeholder="Token Name"
                    value={formData.tokenName}
                    onChange={handleChange}
                    className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Token Symbol</label>
                  <input
                    type="text"
                    name="tokenSymbol"
                    placeholder="Token Symbol"
                    value={formData.tokenSymbol}
                    onChange={handleChange}
                    className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Decimals</label>
                  <input
                    type="number"
                    name="decimals"
                    placeholder="Decimals"
                    value={formData.decimals}
                    onChange={handleChange}
                    className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Supply</label>
                  <input
                    type="number"
                    name="supply"
                    placeholder="1000000000"
                    value={formData.supply}
                    onChange={handleChange}
                    className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg">Description <span className='text-red-600'>*</span></label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="text-[#83f8ff] font-semibold">Modify Creator Information <span className='text-[#7d7d7d]'>(optional)</span></div>
                  <div className='pt-2 pb-3 space-y-1'>

                      <div className="flex flex-col">
                        <label className="text-lg">Creator Name</label>
                        <input type="text" placeholder="Creator Name" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-lg">Creator Website</label>
                        <input type="text" placeholder="Creator Website" className="p-3 border border-[#7d7d7d] rounded-md bg-[#232323] mt-2" />
                      </div>
                  </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
     

        <p className='text-[#83f8ff] text-left text-2xl mt-10 mb-5'>
          Professional Options
        </p>
        <p className='text-xl mb-1'>Authority Control</p>
        <p className='text-[#7d7d7d] text-md mb-4'>
          Solana Token has 3 authorities: Freeze Authority, Mint Authority, and Update Authority.<br/> 
          Revoking them to attracts more people to invest in the token.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          <div className='leading-[20px] inline-block p-3 bg-[#232323] rounded-xl overflow-hidden space-y-6'>
            <p className='text-[#83f8ff]'>Revoke Mint</p>
            <p className='text-[#7d7d7d]'>Mint Authority allows the token developer to mint more supply of your token.</p>
            <div className="justify-between flex items-center">
              <p className="font-semibold">+0.05 SOL</p>
              <input
                type="checkbox"
                name="checkMint"
                checked={formData.checkMint}
                onChange={handleChange}
                className="mr-2"
              />{" "}
            </div>
          </div>

          <div className='leading-[20px] inline-block p-3 bg-[#232323] rounded-xl overflow-hidden space-y-6'>
            <p className='text-[#83f8ff]'>Revoke Freeze</p>
            <p className='text-[#7d7d7d]'>Freeze Authority allows token developer to freeze token accounts of holders.</p>
            <div className='justify-between items-center flex'>
                <p className="font-semibold">+0.05 SOL</p>
                <input
                  type="checkbox"
                  name="checkFreeze"
                  checked={formData.checkFreeze}
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
            </div>
          </div>
        
          <div className='leading-[20px] inline-block p-3 bg-[#232323] rounded-xl overflow-hidden space-y-6'>
          <p className='text-[#83f8ff]'>Revoke Update</p>
          <p className='text-[#7d7d7d]'>Update Authority allows token developer to update the token metadata.</p>
            <div className='justify-between items-center flex'>
                <p className="font-semibold">+0.05 SOL</p>
                <input
                  type="checkbox"
                  name="checkUpdate"
                  checked={formData.checkUpdate}
                  onChange={handleChange}
                  className="mr-2"
                />{" "}
            </div>
          </div>
        </div>


        <button
          type="submit"
          className="mt-6 w-auto px-6 py-3 rounded-full border text-[#83f8ff] bg-[#383838] border-[#83f8ff] hover:bg-[#83f8ff]/20 transition-all duration-300 active:scale-95"
        >
          Create Token
        </button>
      </form>
    </div>
  );
};

export default Create;
