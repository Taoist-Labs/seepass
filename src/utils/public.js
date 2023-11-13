import axios from 'axios';

const IPFS_BASES = [
    'https://gateway.pinata.cloud/ipfs',
    'https://10.via0.com/ipfs',
    'https://ipfs.io/ipfs',
    'https://ipfs.leiyun.org/ipfs',
    'https://cloudflare-ipfs.com/ipfs',
];



async function agumentedIpfsGet(hash) {
    const promises = IPFS_BASES.map(async (ipfsBase) =>{
        try{
            let rt = await axios.get(`${ipfsBase}/${hash}`);
            console.log(rt)
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
        console.error(result)
        return result;
    }catch (e) {
        console.log(e)
        return Promise.reject(e)
    }



}

const getImage = async(img) => {
    if(!img) return;
    if(img.indexOf("://")>-1){
        return img
    }else{
        try{
            let imgAA = await agumentedIpfsGet(img);
            return imgAA
        }catch (e) {
            return Promise.reject(e);
        }

    }
}

export default {
    getImage
}
