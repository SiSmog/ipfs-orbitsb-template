import db from "./db.js";
import bs58 from 'bs58'


function base58ToHex(base58str) {
    const decoded = Buffer.from(bs58.decode(base58str));
    const hexstr = '0x' + decoded.toString('hex');
    return hexstr;
  }

const getDataById=async(id)=>{
    var result=[]
    const iterator = db.iterator({ limit: -1 })
    for (const entry of iterator) {
        if (entry.payload.value.id == id) {
            result.push({hash:entry.hash,data:entry.payload.value})
        }
    }
    return result
}
const res=await db.add({id:1,name:"test"})
console.log("hash:",res);
console.log("hex hash:",base58ToHex(res));
console.log(db.get(res).payload.value)
console.log(await getDataById(1));