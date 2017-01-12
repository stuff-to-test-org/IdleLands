
import _ from 'lodash';

import fs from 'fs';

import * as Professions from '../src/core/professions/_all';
import * as Spells from '../src/plugins/combat/spells/_all';

let docString = `
# IdleLands Class Spells

## Table of Contents

`;

_.each(_.sortBy(_.keys(Professions)), (profession, index) => {
  docString += `${index + 1}. ${profession}\n`;
});

docString += '\n\n';

_.each(_.sortBy(_.keys(Professions)), (profession) => {

  docString += `## ${profession}\n\n`;
  docString += 'Name | Element | Level | Description | Required Collectibles\n';
  docString += '---- | ------- | ----- | ----------- | ---------------------\n';

  const professionSpellsSorted = _(Spells)
    .values()
    .tap(arr => {
      _.each(arr, spell => {
        _.each(spell.tiers, tier => {
          tier._description = spell.description || '';
          tier._spellName = spell.name;
          tier._element = spell.element;
        });
      });
    })
    .map(spell => spell.tiers)
    .flattenDeep()
    .reject(tier => tier.profession !== profession)
    .tap(arr => {
      const tiers = {};
      _.each(arr, tier => {
        if(!tiers[tier._spellName]) tiers[tier._spellName] = 1;
        tier._level = tiers[tier._spellName];
        tiers[tier._spellName]++;
      });
    })
    .sortBy(['level', 'name'])
    .value();

  _.each(professionSpellsSorted, tier => {
    docString += `${tier.name} ([${tier._spellName} ${tier._level}](../src/plugins/combat/spells/${tier._spellName}.js)) | ${tier._element} | ${tier.level} | ${tier._description} | ${tier.collectibles ? tier.collectibles.join(', ') : ''}\n`;
  });

  docString += '\n\n';

});

fs.writeFileSync('docs/SPELLS.md', docString);