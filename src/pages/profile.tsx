import { ethers } from "ethers";
import sns from "@seedao/sns-js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const { domain } = useParams();
  const navigate = useNavigate();

  const [wallet, setWallet] = useState("");

  if (!domain) {
    navigate("/404");
  }

  useEffect(() => {
    const parseDomain = async () => {
      domain &&
        sns
          .resolve(ethers.namehash(domain))
          .then((addr) => {
            console.log("addr:", addr);
            setWallet(addr);
          })
          .catch((error) => {
            console.error("parse domain failed", error);
            navigate("/404");
          });
    };
    parseDomain();
  }, [domain, navigate]);

  return (
    <div className="Profile">
      <p>SeePASS</p>
      {wallet && <p>{wallet}</p>}
    </div>
  );
}
