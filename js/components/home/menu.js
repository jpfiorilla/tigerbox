const appetizers = {
  name: 'APPETIZERS',
  items: [
    { name: `Spicy Pork Ssam`, price: 8, description: `Three wraps of grilled pork with Boston lettuce, gochujang, jalapeño, garlic, cilantro` },
    // { name: `Seafood Scallion Pancake`, price: 12, description: `Pan-fried patties of shrimp, clams & squid in special batter; soy dipping sauce` },
    { name: `Tofu Veggie Fritters`, price: 6, description: `Pan-fried patties of crushed tofu, spinach, carrot, onion, soy dipping sauce`, v: true },
    { name: `Tofu Chicken Fritters`, price: 6, description: `Pan-fried patties of crushed tofu, chicken, carrot, onion, soy dipping sauce` },
    { name: `Kimchi Fritters`, price: 6, description: `Pan-fried patties of Kimchi with special batter, soy dipping sauce`, v: true },
    { name: `Fresh Kimchi `, price: 3, description: `Fresh vegan kimchi`, v: true },
  ]
}

const mandoo = {
  name: 'MANDOO (Korean Dumpling)',
  items: [
    { name: `Steamed Kimchi Mandoo`, price: 8, description: `Kimchi, beef, pork, clear potato noodles, tofu & bean sprouts filling; 6 pieces` },
    { name: `Fried Kimchi Mandoo`, price: 8, description: `` },
    { name: `Steamed Veggie Mandoo`, price: 8, description: `Kimchi, cabbage, clear potato noodles, mushroom & tofu filling; 6 pieces` },
  ]
}

const doshirakBox = {
  name: 'DOSHIRAK BOX',
  info: {
    subtitle: `Each box comes with rice, fresh kimchi & 5 chef choice of the following banchans (side dishes):`,
    ul: [
      `Vegetable (burdock root, string bean, bean sprout, pea shoot, broccoli, spinach, or zucchini)`,
      `Fritter (tofu, potato, or kimchi)`,
      `Daily special !`
    ]
  },
  items: [
    { name: `Galbi`, price: 14, description: `Grilled beef ribs marinated in soy sauce, sesame oil, ginger, garlic, onion, asian pear` },
    { name: `Bulgogi`, price: 12, description: `Tender strips of beef tenderloin marinated in soy sauce, sesame oil, ginger, garlic, onion, Asian pear sautéed with spinach, zucchini & carrots` },
    { name: `Spicy Pork Ssam`, price: 12, description: `Pork marinated in gochujang sauce, ginger, garlic, onion, Asian pear; wrapped with Boston lettuce, gochujang, garlic, jalapeño, & cilantro` },
    { name: `Japchae`, price: 12, description: `Clear potato noodles stir-fried with bulgogi beef, carrots, onions, spinach, shiitake mushrooms, green scallions; seasoned with soy source & sesame oil` },
  ]
}

const riceBowls = {
  name: 'RICE BOWLS',
  info: {
    subtitle: `Each bowl comes with fresh Kimchi  *Add fried egg or extra rice for $1`
  },
  items: [
    { name: `Fried Kimchi`, price: 8, description: `Rice stir-fried w/ sesame oil, kimchi, gochujang sauce`, v: true },
    { name: `Fried Kimchi Spinach`, price: 8, description: `Rice stir-fried w/ sesame oil,  kimchi, gochujang sauce + Spinach`, v: true },
    { name: `Fried Kimchi Galbi`, price: 12.5, description: `Rice stir-fried w/ sesame oil, kimchi, gochujang sauce + Galbi` },
    { name: `Veggie Bibimbop`, price: 9.5, description: `Fresh sautéed carrot, spinach, radish, zucchini, mushroom, bean spouts with gochujang sauce over rice`, v: true },
    { name: `Bulgogi Bibimbop`, price: 9.5, description: `Bulgogi beef, fresh sautéed veggies (see above) with gochujang sauce over rice` },
    { name: `Japchae`, price: 9.5, description: `Clear potato noodles stir-fried with bulgogi beef & assorted vegetables over rice` },
    { name: `Bulgogi`, price: 9.5, description: `Beef tenderloin sautéed with spinach, zucchini & carrots over rice` },
    { name: `Spicy Pork`, price: 9.5, description: `Pork marinated in gochujang sauce, ginger, garlic, onion, Asian pear; sprinkled with 	jalapeño & cilantro; over rice, tofu & fried Kimchi` },
    { name: `Spicy Chicken`, price: 8, description: `Braised chicken in gochujang-soy sauce, potato, carrot, onion, jalapeño over rice` }
  ]
}

const jjigae = {
  name: 'JJIGAE (Korean Stew)',
  items: [
    { name: `Kimchi Jjigae`, price: 12, description: `Hot stew with kimchi, pork, tofu, onions, green scallions + rice` },
    { name: `Soondubu Jjigae`, price: 12, description: `Hot stew with soft tofu, kimchi, pork, onions, green scallions + rice` },
    { name: `Seafood Soondubu Jjigae`, price: 12, description: `Hot stew with soft tofu, seafood scallions + rice` }
  ]
}

const drinksAndSnacks = {
  name: 'DRINKS & SNACKS',
  items: [
    { name: `Seaweed`, price: 1 },
    { name: `Coffee`, price: 3 },
    { name: `Green Tea (Hot)`, price: 3 },
    { name: `Green Tea (Cold)`, price: 3 }
  ]
}

const menu = [ appetizers, mandoo, doshirakBox, riceBowls, jjigae, drinksAndSnacks ];

export default menu;