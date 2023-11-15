import axios from 'axios';

const IPFS_BASES = [
    'https://gateway.pinata.cloud/ipfs',
    'https://gateway.ipfs.io/ipfs',
    'https://ipfs.io/ipfs',
    'https://cf-ipfs.com/ipfs',
    'https://dweb.link/ipfs',
    'https://ipfs.eth.aragon.network/ipfs',
];



async function agumentedIpfsGet(hash) {
    const promises = IPFS_BASES.map(async (ipfsBase) =>{
        try{
            let rt = await axios.get(`${ipfsBase}/${hash}`);
            if(rt.status === 200){
                return `${ipfsBase}/${hash}`;
            }else{
                return Promise.reject(rt.status);
            }

        }catch (e) {
            return Promise.reject(e);
        }
    }
    );

    try{
        const result = await Promise.any(promises);
        return result;
    }catch (e) {
        return Promise.reject(e)
    }



}

const getImage = async(img) => {
    if(!img) return;
    if(img.indexOf("http://")>-1 || img.indexOf("https://")>-1){
        return img
    }else{
        let str =img;
        if(img.indexOf("ipfs://") >-1 ){
            str = img.split("ipfs://")[1];
        }
        try{
            let imgAA = await agumentedIpfsGet(str);
            return imgAA
        }catch (e) {
            return Promise.reject(e);
        }

    }
}

const getBaseUrl = () =>{
   return (process.env.NODE_ENV === 'development' || window.location.href.indexOf("dev-sns.seedao.tech") > -1)?window.config.development.BASEURL :window.config.BASEURL;
}

export default {
    getImage,
    getBaseUrl
}
