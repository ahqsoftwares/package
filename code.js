async function linkcheck(msg){
    if ((msg.includes('https://')) || (msg.includes('http://')) || (msg.includes('.com')) || (msg.includes('.in')) || (msg.includes('.net')) || (msg.includes('.gg')) || (msg.includes('.fr'))) {
        return true;
    } else {
        return false;
    }
}
module.exports.linkcheck = linkcheck;