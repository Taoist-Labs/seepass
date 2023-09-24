import { PublicResolver } from "sns-contracts/lib/contracts/resolvers";
import { PublicResolverContract } from "sns-contracts";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Profile() {
  const { domain } = useParams();
  const navigate = useNavigate();

  const [contract, setContract] = useState<PublicResolver>();
  const [wallet, setWallet] = useState("");

  if (!domain) {
    navigate("/404");
  }

  useEffect(() => {
    const initContract = async () => {
      const provider = new ethers.JsonRpcProvider(
        "https://sepolia.publicgoods.network"
      );
      const _contract: PublicResolver =
        PublicResolverContract.atSepolia().connect(provider);
      setContract(_contract);
    };
    initContract();
  }, []);

  useEffect(() => {
    console.log("domain: ", domain);
    console.log("contract: ", contract);
    const parseDomain = async () => {
      if (contract && domain) {
        contract["addr(bytes32)"](ethers.namehash(domain))
          .then((addr) => {
            console.log("addr:", addr);
            setWallet(addr);
          })
          .catch((error) => {
            console.error("parse domain failed", error);
            navigate("/404");
          });
      }
    };

    parseDomain();
  }, [contract, domain, navigate]);
  return (
    <div className="Profile">
      <p>SeePASS</p>
      {wallet && <p>{wallet}</p>}
    </div>
  );
}
