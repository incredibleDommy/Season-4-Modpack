// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
    event.remove({ output: 'tempad:tempad' })
    event.shaped(
  Item.of('tempad:tempad', 1), // arg 1: output
  [
    'CCC',
    'EBA', // arg 2: the shape (array of strings)
    'DDD'
  ],
  {
    A: 'minecraft:beacon',
    B: 'fsang:mysterium_block',  //arg 3: the mapping object
    C: 'ad_astra:calorite_ingot',
    D: 'cataclysm:ignitium_ingot',
    E: 'cataclysm:lava_power_cell',
  }
    )
  console.log('Its me computer dave the guy who changed the tempad recipe!')
})