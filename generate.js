

const getGrp = (grp) => {
  let Rgrp = grp;
  let len = Rgrp.length;
  let idx = -1;

  return {
    getWord: () => {
      if(idx < len - 1)
        idx++;
      else
        idx = 0;

      return Rgrp[idx];
    },
    len
  }
}

let getWord = (grps) => {
  let len = 1;
  let rGroup = grps.map(grp => {
    len = len * grp.length;
    return getGrp(grp);
  });

  console.log(len)

  for(let i = 0; i < len; i++) {
    let str = '';
    rGroup.forEach(grp => {
      str = str + grp.getWord();
    });
    
    console.log(str);
  }
}
