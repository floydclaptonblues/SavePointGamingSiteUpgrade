import test from 'node:test';
import assert from 'node:assert/strict';
import {filterCatalog} from './core.mjs';
const items=[{title:'Zeta',genre:'RPG',year:1997,console:'PS',rating:'T'},{title:'Alpha',genre:'RPG',year:1993,console:'SNES',rating:'E'},{title:'2 Fast',genre:'Racing',year:2001,console:'PS',rating:'E'}];
test('combines all requested facets',()=>assert.deepEqual(filterCatalog(items,{search:'zet',genre:'RPG',decade:'1990',console:'PS',rating:'T',letter:'Z'}).map(x=>x.title),['Zeta']));
test('sorts alphabetically without mutating input',()=>{assert.equal(filterCatalog(items)[0].title,'2 Fast');assert.equal(filterCatalog(items,{sort:'za'})[0].title,'Zeta');assert.equal(items[0].title,'Zeta')});
test('handles empty results and non-letter titles',()=>{assert.equal(filterCatalog(items,{genre:'Puzzle'}).length,0);assert.equal(filterCatalog(items,{letter:'#'})[0].title,'2 Fast')});
