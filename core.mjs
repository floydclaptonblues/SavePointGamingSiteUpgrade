export function filterCatalog(items,{search='',genre='',decade='',console:platform='',rating='',letter='',sort='az'}={}) {
 return items.filter(x=>(!search||x.title.toLowerCase().includes(search.toLowerCase()))&&(!genre||x.genre===genre)&&(!decade||Math.floor(x.year/10)*10===Number(decade))&&(!platform||x.console===platform)&&(!rating||x.rating===rating)&&(!letter||(letter==='#'? /^[^a-z]/i.test(x.title):x.title.toUpperCase().startsWith(letter)))).sort((a,b)=>sort==='za'?b.title.localeCompare(a.title):a.title.localeCompare(b.title));
}
