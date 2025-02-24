const connectWallet = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const response = await window.solana.connect();
      const publicKey = response.publicKey.toString();
      setWalletAddress(publicKey);

      console.log("Connected Wallet Address:", publicKey);

      const res = await fetch(`${process.env.BACKEND_URI}/connect-wallet`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicKey }),
      });

      if (res.ok) {
        setRedirectUrl("/");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  } else {
    alert("Please install Phantom Wallet!");
  }
};
