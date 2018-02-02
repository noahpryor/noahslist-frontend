import comedians from '../fixtures/comedians'


async function getComedian(id) {
  const comedian = comedians[id];
  if(!comedian) throw new Error("No comedian found")
  return comedian
}


async function getComedians() {
  const comedianArray = Object.values(comedians)
  return  comedianArray
}



export {getComedian, getComedians}
