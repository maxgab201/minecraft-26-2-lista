
/* ============================================================
 *  Minecraft 26.2 — Chaos Cubed — Block Checklist
 *  Fully rewritten: fixed persistence, deduplication, i18n, etc.
 * ============================================================ */

/* ── i18n Dictionaries ──────────────────────────────────────── */
const i18n = {
  es: {
    title: 'MINECRAFT 26.2 — CHAOS CUBED',
    subtitle: 'Lista completa de <strong>todos los bloques</strong> disponibles en Minecraft 26.2 (Chaos Cubed, junio 2026). Incluye familias <strong>Cinnabar</strong>, <strong>Sulfur</strong>, <strong>Potent Sulfur</strong>, <strong>Sulfur Spike</strong>, más las <strong>variantes</strong> conocidas: losas, escaleras, muros, ladrillos, pulidos, tallados y derivados de cada bloque base.',
    badge_total: 'bloques y variantes',
    badge_new: 'Nuevos: Cinnabar · Sulfur',
    badge_all: 'Todas las formas incluidas',
    btn_check: '✓ Marcar todo',
    btn_uncheck: '✗ Desmarcar todo',
    btn_print: '🖨 Imprimir',
    btn_clear: '🗑 Desmarcar todo',
    btn_clear_search: 'Limpiar',
    stats_prefix: 'Marcados: <span id="count">0</span> / <span id="total">0</span>',
    search_placeholder: 'Buscar bloque...',
    cat_new_title: 'NUEVOS — 26.2 CHAOS CUBED',
    cat_new_desc: 'Familias Cinnabar y Sulfur con todas sus variantes (slab, stairs, wall, brick, polished, chiseled), Potent Sulfur y Sulfur Spike.',
    cat_build_title: 'CONSTRUCCIÓN',
    cat_build_desc: 'Piedras, ladrillos, losas, escaleras, muros, deepslate y variantes decorativas.',
    cat_wood_title: 'MADERA',
    cat_wood_desc: 'Todos los tipos de madera, troncos, tablas, puertas, vallas, escaleras, losas, señales, estanterías y derivados.',
    cat_nature_title: 'NATURALEZA',
    cat_nature_desc: 'Plantas, flores, árboles, césped, tierra, arena, corales, algas, cultivos y elementos naturales.',
    cat_ore_title: 'MINERALES Y ORES',
    cat_ore_desc: 'Minerales, bloques de mineral (incluyendo deepslate), gemas, cristal de amatista y derivados.',
    cat_deco_title: 'DECORACIÓN',
    cat_deco_desc: 'Vidrios, vitrales, concreto, terracota, alfombras, camas, velas, cerámica, banderas, cajas shulker y elementos estéticos.',
    cat_red_title: 'REDSTONE',
    cat_red_desc: 'Componentes de redstone: repetidores, comparadores, pistones, observadores, sensores, railes, palancas y bloques de comando.',
    cat_nether_title: 'NETHER',
    cat_nether_desc: 'Bloques exclusivos del Nether: netherrack, blackstone, basalt, crimson, warped, ladrillos del Nether, suelo de almas, etc.',
    cat_end_title: 'END',
    cat_end_desc: 'Bloques del End: piedra del End, ladrillos, purpur, corus, portal, huevo de dragón, cabeza de dragón, etc.',
    cat_special_title: 'ESPECIALES / MECÁNICOS',
    cat_special_desc: 'Bloques funcionales únicos: beacon, spawner, jigsaw, barrera, bedrock, bloque de estructura, núcleo pesado, etc.',
    cat_variant_title: 'VARIANTES COMPLETAS',
    cat_variant_desc: 'Losas (slab), escaleras (stairs), muros (wall), ladrillos (brick), pulidos (polished), tallados (chiseled) y derivados de todos los bloques.',
    footer_line1: '<strong>Minecraft 26.2 — Chaos Cubed</strong> · Lista completa de bloques con todas sus variantes.',
    footer_line2: 'Referencia: datos de Craftdex (1159 bloques base) + expansión de variantes + nuevos bloques de la actualización 26.2.',
    footer_line3: 'Esta página cubre <strong>todas las formas</strong> conocidas: base, losa, escalera, muro, pulido, ladrillo, tallado, cortado, oxidado, encerado, expuesto y más.',
    tag_new: '26.2',
    tag_nether: 'Nether',
    tag_end: 'End',
    tag_special: 'Especial',
  },
  en: {
    title: 'MINECRAFT 26.2 — CHAOS CUBED',
    subtitle: 'Complete list of <strong>all blocks</strong> in Minecraft 26.2 (Chaos Cubed, June 2026). Includes <strong>Cinnabar</strong>, <strong>Sulfur</strong>, <strong>Potent Sulfur</strong>, <strong>Sulfur Spike</strong>, plus the <strong>known variants</strong>: slabs, stairs, walls, bricks, polished, chiseled, and every derived form.',
    badge_total: 'blocks & variants',
    badge_new: 'New: Cinnabar · Sulfur',
    badge_all: 'All forms included',
    btn_check: '✓ Check All',
    btn_uncheck: '✗ Uncheck All',
    btn_print: '🖨 Print',
    btn_clear: '🗑 Uncheck All',
    btn_clear_search: 'Clear',
    stats_prefix: 'Checked: <span id="count">0</span> / <span id="total">0</span>',
    search_placeholder: 'Search block...',
    cat_new_title: 'NEW — 26.2 CHAOS CUBED',
    cat_new_desc: 'Cinnabar and Sulfur families with all variants (slab, stairs, wall, brick, polished, chiseled), Potent Sulfur and Sulfur Spike.',
    cat_build_title: 'BUILDING',
    cat_build_desc: 'Stones, bricks, slabs, stairs, walls, deepslate and decorative variants.',
    cat_wood_title: 'WOOD',
    cat_wood_desc: 'All wood types, logs, planks, doors, fences, stairs, slabs, signs, shelves and derivatives.',
    cat_nature_title: 'NATURE',
    cat_nature_desc: 'Plants, flowers, trees, grass, dirt, sand, corals, kelp, crops and natural elements.',
    cat_ore_title: 'MINERALS & ORES',
    cat_ore_desc: 'Minerals, ore blocks (including deepslate), gems, amethyst crystal and derivatives.',
    cat_deco_title: 'DECORATION',
    cat_deco_desc: 'Glass, stained glass, concrete, terracotta, carpets, beds, candles, pottery, banners, shulker boxes and aesthetic elements.',
    cat_red_title: 'REDSTONE',
    cat_red_desc: 'Redstone components: repeaters, comparators, pistons, observers, sensors, rails, levers and command blocks.',
    cat_nether_title: 'NETHER',
    cat_nether_desc: 'Nether-exclusive blocks: netherrack, blackstone, basalt, crimson, warped, nether bricks, soul soil, etc.',
    cat_end_title: 'END',
    cat_end_desc: 'End blocks: end stone, bricks, purpur, chorus, portal, dragon egg, dragon head, etc.',
    cat_special_title: 'SPECIAL / MECHANICAL',
    cat_special_desc: 'Unique functional blocks: beacon, spawner, jigsaw, barrier, bedrock, structure block, heavy core, etc.',
    cat_variant_title: 'FULL VARIANTS',
    cat_variant_desc: 'Slabs, stairs, walls, bricks, polished, chiseled and derived forms of all blocks.',
    footer_line1: '<strong>Minecraft 26.2 — Chaos Cubed</strong> · Complete block list with all variants.',
    footer_line2: 'Reference: Craftdex data (1,159 base blocks) + expanded variants + new blocks from update 26.2.',
    footer_line3: 'This page covers <strong>all known forms</strong>: base, slab, stair, wall, polished, brick, chiseled, cut, oxidized, waxed, exposed, and more.',
    tag_new: '26.2',
    tag_nether: 'Nether',
    tag_end: 'End',
    tag_special: 'Special',
  }
};

/* ── Block name translations (EN → ES) ─────────────────────── */
const namesTranslationEs = {
  "Acacia Button": "Botón de acacia",
  "Acacia Door": "Puerta de acacia",
  "Acacia Fence": "Valla de acacia",
  "Acacia Fence Gate": "Puerta de valla de acacia",
  "Acacia Hanging Sign": "Cartel colgante de acacia",
  "Acacia Leaves": "Hojas de acacia",
  "Acacia Log": "Tronco de acacia",
  "Acacia Planks": "Madera de acacia",
  "Acacia Pressure Plate": "Placa de presión de acacia",
  "Acacia Sapling": "Brote de acacia",
  "Acacia Shelf": "Estante de acacia",
  "Acacia Sign": "Cartel de acacia",
  "Acacia Slab": "Baldosa de acacia",
  "Acacia Stairs": "Escaleras de acacia",
  "Acacia Trapdoor": "Escotilla de acacia",
  "Acacia Wall Hanging Sign": "Cartel colgante de acacia en pared",
  "Acacia Wall Sign": "Cartel de acacia en pared",
  "Acacia Wood": "Leño de acacia",
  "Activator Rail": "Vía activadora",
  "Air": "Aire",
  "Allium": "Allium",
  "Amethyst Block": "Bloque de amatista",
  "Amethyst Cluster": "Clúster de amatista",
  "Ancient Debris": "Escombros ancestrales",
  "Andesite": "Andesita",
  "Andesite Slab": "Baldosa de andesita",
  "Andesite Stairs": "Escaleras de andesita",
  "Andesite Wall": "Pared de andesita",
  "Anvil": "Yunque",
  "Attached Melon Stem": "Tallo de sandía unido",
  "Attached Pumpkin Stem": "Tallo de zapallo unido",
  "Azalea": "Azalea",
  "Azalea Leaves": "Hojas de azalea",
  "Azure Bluet": "Rubiácea",
  "Bamboo": "Bambú",
  "Bamboo Block": "Bloque de bambú",
  "Bamboo Button": "Botón de bambú",
  "Bamboo Door": "Puerta de bambú",
  "Bamboo Fence": "Valla de bambú",
  "Bamboo Fence Gate": "Puerta de valla de bambú",
  "Bamboo Hanging Sign": "Cartel colgante de bambú",
  "Bamboo Mosaic": "Mosaico de bambú",
  "Bamboo Mosaic Slab": "Baldosa de mosaico de bambú",
  "Bamboo Mosaic Stairs": "Escaleras de mosaico de bambú",
  "Bamboo Planks": "Madera de bambú",
  "Bamboo Pressure Plate": "Placa de presión de bambú",
  "Bamboo Sapling": "Brote de bambú",
  "Bamboo Shelf": "Estante de bambú",
  "Bamboo Sign": "Cartel de bambú",
  "Bamboo Slab": "Baldosa de bambú",
  "Bamboo Stairs": "Escaleras de bambú",
  "Bamboo Trapdoor": "Escotilla de bambú",
  "Bamboo Wall Hanging Sign": "Cartel colgante de bambú en pared",
  "Bamboo Wall Sign": "Cartel de bambú en pared",
  "Barrel": "Barril",
  "Barrier": "Barrera",
  "Basalt": "Basalto",
  "Beacon": "Faro",
  "Bedrock": "Piedra madre",
  "Bee Nest": "Colmena",
  "Beehive": "Apiario",
  "Beetroots": "Remolachas",
  "Bell": "Campana",
  "Big Dripleaf": "Plantaforma",
  "Big Dripleaf Stem": "Tallo de plantaforma",
  "Birch Button": "Botón de abedul",
  "Birch Door": "Puerta de abedul",
  "Birch Fence": "Valla de abedul",
  "Birch Fence Gate": "Puerta de valla de abedul",
  "Birch Hanging Sign": "Cartel colgante de abedul",
  "Birch Leaves": "Hojas de abedul",
  "Birch Log": "Tronco de abedul",
  "Birch Planks": "Madera de abedul",
  "Birch Pressure Plate": "Placa de presión de abedul",
  "Birch Sapling": "Brote de abedul",
  "Birch Shelf": "Estante de abedul",
  "Birch Sign": "Cartel de abedul",
  "Birch Slab": "Baldosa de abedul",
  "Birch Stairs": "Escaleras de abedul",
  "Birch Trapdoor": "Escotilla de abedul",
  "Birch Wall Hanging Sign": "Cartel colgante de abedul en pared",
  "Birch Wall Sign": "Cartel de abedul en pared",
  "Birch Wood": "Leño de abedul",
  "Black Banner": "Estandarte negro",
  "Black Bed": "Cama negra",
  "Black Candle": "Vela negra",
  "Black Candle Cake": "Torta con vela negra",
  "Black Carpet": "Alfombra negra",
  "Black Concrete": "Concreto negro",
  "Black Concrete Powder": "Cemento negro",
  "Black Glazed Terracotta": "Azulejo negro",
  "Black Shulker Box": "Caja de shulker negra",
  "Black Stained Glass": "Vidrio negro",
  "Black Stained Glass Pane": "Panel de vidrio negro",
  "Black Terracotta": "Terracota negra",
  "Black Wall Banner": "Estandarte negro",
  "Black Wool": "Lana negra",
  "Blackstone": "Piedra negra",
  "Blackstone Slab": "Baldosa de piedra negra",
  "Blackstone Stairs": "Escaleras de piedra negra",
  "Blackstone Wall": "Pared de piedra negra",
  "Blast Furnace": "Alto horno",
  "Blue Banner": "Estandarte azul",
  "Blue Bed": "Cama azul",
  "Blue Candle": "Vela azul",
  "Blue Candle Cake": "Torta con vela azul",
  "Blue Carpet": "Alfombra azul",
  "Blue Concrete": "Concreto azul",
  "Blue Concrete Powder": "Cemento azul",
  "Blue Glazed Terracotta": "Azulejo azul",
  "Blue Ice": "Hielo azul",
  "Blue Orchid": "Orquídea azul",
  "Blue Shulker Box": "Caja de shulker azul",
  "Blue Stained Glass": "Vidrio azul",
  "Blue Stained Glass Pane": "Panel de vidrio azul",
  "Blue Terracotta": "Terracota azul",
  "Blue Wall Banner": "Estandarte azul",
  "Blue Wool": "Lana azul",
  "Bone Block": "Bloque de huesos",
  "Bookshelf": "Biblioteca",
  "Brain Coral": "Coral de cerebro",
  "Brain Coral Block": "Bloque de coral de cerebro",
  "Brain Coral Fan": "Gorgonia de cerebro",
  "Brain Coral Wall Fan": "Gorgonia de cerebro en pared",
  "Brewing Stand": "Destiladora",
  "Brick Slab": "Baldosa de ladrillos",
  "Brick Stairs": "Escaleras de ladrillos",
  "Brick Wall": "Pared de ladrillos",
  "Bricks": "Ladrillos",
  "Brown Banner": "Estandarte marrón",
  "Brown Bed": "Cama marrón",
  "Brown Candle": "Vela marrón",
  "Brown Candle Cake": "Torta con vela marrón",
  "Brown Carpet": "Alfombra marrón",
  "Brown Concrete": "Concreto marrón",
  "Brown Concrete Powder": "Cemento marrón",
  "Brown Glazed Terracotta": "Azulejo marrón",
  "Brown Mushroom": "Hongo marrón",
  "Brown Mushroom Block": "Bloque de hongo marrón",
  "Brown Shulker Box": "Caja de shulker marrón",
  "Brown Stained Glass": "Vidrio marrón",
  "Brown Stained Glass Pane": "Panel de vidrio marrón",
  "Brown Terracotta": "Terracota marrón",
  "Brown Wall Banner": "Estandarte marrón",
  "Brown Wool": "Lana marrón",
  "Bubble Column": "Columna de burbujas",
  "Bubble Coral": "Coral de burbuja",
  "Bubble Coral Block": "Bloque de coral de burbuja",
  "Bubble Coral Fan": "Gorgonia de burbuja",
  "Bubble Coral Wall Fan": "Gorgonia de burbuja en pared",
  "Budding Amethyst": "Brotador de amatista",
  "Bush": "Arbusto",
  "Cactus": "Cactus",
  "Cactus Flower": "Flor de cactus",
  "Cake": "Torta",
  "Calcite": "Calcita",
  "Calibrated Sculk Sensor": "Sensor de sculk calibrado",
  "Campfire": "Fogata",
  "Candle": "Vela",
  "Candle Cake": "Torta con vela",
  "Carrots": "Zanahorias",
  "Cartography Table": "Mesa de cartografía",
  "Carved Pumpkin": "Zapallo esculpido",
  "Cauldron": "Caldero",
  "Cave Air": "Aire de cuevas",
  "Cave Vines": "Enredaderas de cueva",
  "Cave Vines Plant": "Planta de enredaderas de cueva",
  "Chain Command Block": "Bloque de comandos en cadena",
  "Cherry Button": "Botón de cerezo",
  "Cherry Door": "Puerta de cerezo",
  "Cherry Fence": "Valla de cerezo",
  "Cherry Fence Gate": "Puerta de valla de cerezo",
  "Cherry Hanging Sign": "Cartel colgante de cerezo",
  "Cherry Leaves": "Hojas de cerezo",
  "Cherry Log": "Tronco de cerezo",
  "Cherry Planks": "Madera de cerezo",
  "Cherry Pressure Plate": "Placa de presión de cerezo",
  "Cherry Sapling": "Brote de cerezo",
  "Cherry Shelf": "Estante de cerezo",
  "Cherry Sign": "Cartel de cerezo",
  "Cherry Slab": "Baldosa de cerezo",
  "Cherry Stairs": "Escaleras de cerezo",
  "Cherry Trapdoor": "Escotilla de cerezo",
  "Cherry Wall Hanging Sign": "Cartel colgante de cerezo en pared",
  "Cherry Wall Sign": "Cartel de cerezo en pared",
  "Cherry Wood": "Leño de cerezo",
  "Chest": "Cofre",
  "Chipped Anvil": "Yunque dañado",
  "Chiseled Bookshelf": "Estantería",
  "Chiseled Cinnabar": "Cinabrio cincelado",
  "Chiseled Copper": "Cobre cincelado",
  "Chiseled Deepslate": "Pizarra profunda cincelada",
  "Chiseled Nether Bricks": "Ladrillos del Nether cincelados",
  "Chiseled Polished Blackstone": "Piedra negra pulida cincelada",
  "Chiseled Quartz Block": "Cuarzo cincelado",
  "Chiseled Red Sandstone": "Arenisca rojiza cincelada",
  "Chiseled Resin Bricks": "Ladrillos de resina cincelados",
  "Chiseled Sandstone": "Arenisca cincelada",
  "Chiseled Stone Bricks": "Ladrillos de piedra cincelados",
  "Chiseled Sulfur": "Azufre cincelado",
  "Chiseled Tuff": "Toba cincelada",
  "Chiseled Tuff Bricks": "Ladrillos de toba cincelados",
  "Chorus Flower": "Flor de chorus",
  "Chorus Plant": "Chorus",
  "Cinnabar": "Cinabrio",
  "Cinnabar Brick Slab": "Baldosa de ladrillos de cinabrio",
  "Cinnabar Brick Stairs": "Escaleras de ladrillos de cinabrio",
  "Cinnabar Brick Wall": "Pared de ladrillos de cinabrio",
  "Cinnabar Bricks": "Ladrillos de cinabrio",
  "Cinnabar Slab": "Baldosa de cinabrio",
  "Cinnabar Stairs": "Escaleras de cinabrio",
  "Cinnabar Wall": "Pared de cinabrio",
  "Clay": "Arcilla",
  "Closed Eyeblossom": "Miraflor cerrada",
  "Coal Block": "Bloque de carbón",
  "Coal Ore": "Mineral de carbón",
  "Coarse Dirt": "Tierra infértil",
  "Cobbled Deepslate": "Adoquín de pizarra profunda",
  "Cobbled Deepslate Slab": "Baldosa de adoquín de pizarra profunda",
  "Cobbled Deepslate Stairs": "Escaleras de adoquín de pizarra profunda",
  "Cobbled Deepslate Wall": "Pared de adoquín de pizarra profunda",
  "Cobblestone": "Adoquín",
  "Cobblestone Slab": "Baldosa de adoquín",
  "Cobblestone Stairs": "Escaleras de adoquín",
  "Cobblestone Wall": "Pared de adoquín",
  "Cobweb": "Telaraña",
  "Cocoa": "Cacao",
  "Command Block": "Bloque de comandos",
  "Comparator": "Comparador de redstone",
  "Composter": "Compostera",
  "Conduit": "Canalizador",
  "Copper Bars": "Barrotes de cobre",
  "Copper Block": "Bloque de cobre",
  "Copper Bulb": "Lámpara de cobre",
  "Copper Chain": "Cadena de cobre",
  "Copper Chest": "Cofre de cobre",
  "Copper Door": "Puerta de cobre",
  "Copper Golem Statue": "Estatua de gólem de cobre",
  "Copper Grate": "Rejilla de cobre",
  "Copper Lantern": "Farol de cobre",
  "Copper Ore": "Mineral de cobre",
  "Copper Torch": "Antorcha de cobre",
  "Copper Trapdoor": "Escotilla de cobre",
  "Copper Wall Torch": "Antorcha de cobre en pared",
  "Cornflower": "Aciano",
  "Cracked Deepslate Bricks": "Ladrillos de pizarra profunda quebrados",
  "Cracked Deepslate Tiles": "Losetas de pizarra profunda quebradas",
  "Cracked Nether Bricks": "Ladrillos del Nether quebrados",
  "Cracked Polished Blackstone Bricks": "Ladrillos de piedra negra pulida agrietada",
  "Cracked Stone Bricks": "Ladrillos de piedra quebrados",
  "Crafter": "Fabricador",
  "Crafting Table": "Mesa de crafteo",
  "Creaking Heart": "Corazón de crujidor",
  "Creeper Head": "Cabeza de creeper",
  "Creeper Wall Head": "Cabeza de creeper en pared",
  "Crimson Button": "Botón carmesí",
  "Crimson Door": "Puerta carmesí",
  "Crimson Fence": "Valla carmesí",
  "Crimson Fence Gate": "Puerta de valla carmesí",
  "Crimson Fungus": "Hongo carmesí",
  "Crimson Hanging Sign": "Cartel colgante carmesí",
  "Crimson Hyphae": "Hifas carmesí",
  "Crimson Nylium": "Nilio carmesí",
  "Crimson Planks": "Madera carmesí",
  "Crimson Pressure Plate": "Placa de presión carmesí",
  "Crimson Roots": "Yuyos carmesí",
  "Crimson Shelf": "Estante carmesí",
  "Crimson Sign": "Cartel carmesí",
  "Crimson Slab": "Baldosa carmesí",
  "Crimson Stairs": "Escaleras carmesí",
  "Crimson Stem": "Tallo carmesí",
  "Crimson Trapdoor": "Escotilla carmesí",
  "Crimson Wall Hanging Sign": "Cartel colgante carmesí en pared",
  "Crimson Wall Sign": "Cartel carmesí en pared",
  "Crying Obsidian": "Obsidiana llorosa",
  "Cut Copper": "Cobre cortado",
  "Cut Copper Slab": "Baldosa de cobre cortado",
  "Cut Copper Stairs": "Escaleras de cobre cortado",
  "Cut Red Sandstone": "Arenisca rojiza cortada",
  "Cut Red Sandstone Slab": "Baldosa de arenisca rojiza cortada",
  "Cut Sandstone": "Arenisca cortada",
  "Cut Sandstone Slab": "Baldosa de arenisca cortada",
  "Cyan Banner": "Estandarte cian",
  "Cyan Bed": "Cama cian",
  "Cyan Candle": "Vela cian",
  "Cyan Candle Cake": "Torta con vela cian",
  "Cyan Carpet": "Alfombra cian",
  "Cyan Concrete": "Concreto cian",
  "Cyan Concrete Powder": "Cemento cian",
  "Cyan Glazed Terracotta": "Azulejo cian",
  "Cyan Shulker Box": "Caja de shulker cian",
  "Cyan Stained Glass": "Vidrio cian",
  "Cyan Stained Glass Pane": "Panel de vidrio cian",
  "Cyan Terracotta": "Terracota cian",
  "Cyan Wall Banner": "Estandarte cian",
  "Cyan Wool": "Lana cian",
  "Damaged Anvil": "Yunque muy dañado",
  "Dandelion": "Diente de león",
  "Dark Oak Button": "Botón de roble oscuro",
  "Dark Oak Door": "Puerta de roble oscuro",
  "Dark Oak Fence": "Valla de roble oscuro",
  "Dark Oak Fence Gate": "Puerta de valla de roble oscuro",
  "Dark Oak Hanging Sign": "Cartel colgante de roble oscuro",
  "Dark Oak Leaves": "Hojas de roble oscuro",
  "Dark Oak Log": "Tronco de roble oscuro",
  "Dark Oak Planks": "Madera de roble oscuro",
  "Dark Oak Pressure Plate": "Placa de presión de roble oscuro",
  "Dark Oak Sapling": "Brote de roble oscuro",
  "Dark Oak Shelf": "Estante de roble oscuro",
  "Dark Oak Sign": "Cartel de roble oscuro",
  "Dark Oak Slab": "Baldosa de roble oscuro",
  "Dark Oak Stairs": "Escaleras de roble oscuro",
  "Dark Oak Trapdoor": "Escotilla de roble oscuro",
  "Dark Oak Wall Hanging Sign": "Cartel colgante de roble oscuro en pared",
  "Dark Oak Wall Sign": "Cartel de roble oscuro en pared",
  "Dark Oak Wood": "Leño de roble oscuro",
  "Dark Prismarine": "Prismarina oscura",
  "Dark Prismarine Slab": "Baldosa de prismarina oscura",
  "Dark Prismarine Stairs": "Escaleras de prismarina oscura",
  "Daylight Detector": "Sensor de luz solar",
  "Dead Brain Coral": "Coral de cerebro muerto",
  "Dead Brain Coral Block": "Bloque de coral de cerebro muerto",
  "Dead Brain Coral Fan": "Gorgonia de cerebro muerta",
  "Dead Brain Coral Wall Fan": "Gorgonia de cerebro muerta en pared",
  "Dead Bubble Coral": "Coral de burbuja muerto",
  "Dead Bubble Coral Block": "Bloque de coral de burbuja muerto",
  "Dead Bubble Coral Fan": "Gorgonia de burbuja muerta",
  "Dead Bubble Coral Wall Fan": "Gorgonia de burbuja muerta en pared",
  "Dead Bush": "Arbusto muerto",
  "Dead Fire Coral": "Coral de fuego muerto",
  "Dead Fire Coral Block": "Bloque de coral de fuego muerto",
  "Dead Fire Coral Fan": "Gorgonia de fuego muerta",
  "Dead Fire Coral Wall Fan": "Gorgonia de fuego muerta en pared",
  "Dead Horn Coral": "Coral de cuerno muerto",
  "Dead Horn Coral Block": "Bloque de coral de cuerno muerto",
  "Dead Horn Coral Fan": "Gorgonia de cuerno muerta",
  "Dead Horn Coral Wall Fan": "Gorgonia de cuerno muerta en pared",
  "Dead Tube Coral": "Coral de tubo muerto",
  "Dead Tube Coral Block": "Bloque de coral de tubo muerto",
  "Dead Tube Coral Fan": "Gorgonia de tubo muerta",
  "Dead Tube Coral Wall Fan": "Gorgonia de tubo muerta en pared",
  "Decorated Pot": "Maceta decorada",
  "Deepslate": "Pizarra profunda",
  "Deepslate Brick Slab": "Baldosa de ladrillos de pizarra profunda",
  "Deepslate Brick Stairs": "Escaleras de ladrillos de pizarra profunda",
  "Deepslate Brick Wall": "Pared de ladrillos de pizarra profunda",
  "Deepslate Bricks": "Ladrillos de pizarra profunda",
  "Deepslate Coal Ore": "Mineral de carbón de pizarra profunda",
  "Deepslate Copper Ore": "Mineral de cobre de pizarra profunda",
  "Deepslate Diamond Ore": "Mineral de diamante de pizarra profunda",
  "Deepslate Emerald Ore": "Mineral de esmeralda de pizarra profunda",
  "Deepslate Gold Ore": "Mineral de oro de pizarra profunda",
  "Deepslate Iron Ore": "Mineral de hierro de pizarra profunda",
  "Deepslate Lapis Ore": "Mineral de lapizlázuli de pizarra profunda",
  "Deepslate Redstone Ore": "Mineral de redstone de pizarra profunda",
  "Deepslate Tile Slab": "Baldosa de losetas de pizarra profunda",
  "Deepslate Tile Stairs": "Escaleras de losetas de pizarra profunda",
  "Deepslate Tile Wall": "Pared de losetas de pizarra profunda",
  "Deepslate Tiles": "Losetas de pizarra profunda",
  "Detector Rail": "Vía detectora",
  "Diamond Block": "Bloque de diamante",
  "Diamond Ore": "Mineral de diamante",
  "Diorite": "Diorita",
  "Diorite Slab": "Baldosa de diorita",
  "Diorite Stairs": "Escaleras de diorita",
  "Diorite Wall": "Pared de diorita",
  "Dirt": "Tierra",
  "Dirt Path": "Camino de tierra",
  "Dispenser": "Dispensador",
  "Dragon Egg": "Huevo de dragón",
  "Dragon Head": "Cabeza de dragón",
  "Dragon Wall Head": "Cabeza de dragón en pared",
  "Dried Ghast": "Ghast seco",
  "Dried Kelp Block": "Bloque de algas secas",
  "Dripstone Block": "Bloque de espeleotema",
  "Dropper": "Soltador",
  "Emerald Block": "Bloque de esmeralda",
  "Emerald Ore": "Mineral de esmeralda",
  "Enchanting Table": "Mesa de encantamientos",
  "End Gateway": "Acceso al End",
  "End Portal": "Marco del portal al End",
  "End Portal Frame": "Marco del portal del End",
  "End Rod": "Vara del End",
  "End Stone": "Piedra del End",
  "End Stone Brick Slab": "Baldosa de ladrillos de piedra del End",
  "End Stone Brick Stairs": "Escaleras de ladrillos de piedra del End",
  "End Stone Brick Wall": "Pared de ladrillos de piedra del End",
  "End Stone Bricks": "Ladrillos de piedra del End",
  "Ender Chest": "Cofre de ender",
  "Exposed Chiseled Copper": "Cobre cincelado expuesto",
  "Exposed Copper": "Cobre expuesto",
  "Exposed Copper Bars": "Barrotes de cobre expuesto",
  "Exposed Copper Bulb": "Lámpara de cobre expuesto",
  "Exposed Copper Chain": "Cadena de cobre expuesto",
  "Exposed Copper Chest": "Cofre de cobre expuesto",
  "Exposed Copper Door": "Puerta de cobre expuesto",
  "Exposed Copper Golem Statue": "Estatua de gólem de cobre expuesto",
  "Exposed Copper Grate": "Rejilla de cobre expuesto",
  "Exposed Copper Lantern": "Farol de cobre expuesto",
  "Exposed Copper Trapdoor": "Escotilla de cobre expuesto",
  "Exposed Cut Copper": "Cobre cortado expuesto",
  "Exposed Cut Copper Slab": "Baldosa de cobre cortado expuesto",
  "Exposed Cut Copper Stairs": "Escaleras de cobre cortado expuesto",
  "Exposed Lightning Rod": "Pararrayos expuesto",
  "Farmland": "Tierra de cultivo",
  "Fern": "Helecho",
  "Fire": "Fuego",
  "Fire Coral": "Coral de fuego",
  "Fire Coral Block": "Bloque de coral de fuego",
  "Fire Coral Fan": "Gorgonia de fuego",
  "Fire Coral Wall Fan": "Gorgonia de fuego en pared",
  "Firefly Bush": "Arbusto de luciérnagas",
  "Fletching Table": "Mesa de arquería",
  "Flower Pot": "Maceta",
  "Flowering Azalea": "Azalea florida",
  "Flowering Azalea Leaves": "Hojas de azalea florida",
  "Frogspawn": "Desove de sapo",
  "Frosted Ice": "Hielo escarchado",
  "Furnace": "Horno",
  "Gilded Blackstone": "Piedra negra dorada",
  "Glass": "Vidrio",
  "Glass Pane": "Panel de vidrio",
  "Glow Lichen": "Liquen luminoso",
  "Glowstone": "Piedra luminosa",
  "Gold Block": "Bloque de oro",
  "Gold Ore": "Mineral de oro",
  "Golden Dandelion": "Diente de león dorado",
  "Granite": "Granito",
  "Granite Slab": "Baldosa de granito",
  "Granite Stairs": "Escaleras de granito",
  "Granite Wall": "Pared de granito",
  "Grass Block": "Bloque de pasto",
  "Gravel": "Grava",
  "Gray Banner": "Estandarte gris",
  "Gray Bed": "Cama gris",
  "Gray Candle": "Vela gris",
  "Gray Candle Cake": "Torta con vela gris",
  "Gray Carpet": "Alfombra gris",
  "Gray Concrete": "Concreto gris",
  "Gray Concrete Powder": "Cemento gris",
  "Gray Glazed Terracotta": "Azulejo gris",
  "Gray Shulker Box": "Caja de shulker gris",
  "Gray Stained Glass": "Vidrio gris",
  "Gray Stained Glass Pane": "Panel de vidrio gris",
  "Gray Terracotta": "Terracota gris",
  "Gray Wall Banner": "Estandarte gris",
  "Gray Wool": "Lana gris",
  "Green Banner": "Estandarte verde",
  "Green Bed": "Cama verde",
  "Green Candle": "Vela verde",
  "Green Candle Cake": "Torta con vela verde",
  "Green Carpet": "Alfombra verde",
  "Green Concrete": "Concreto verde",
  "Green Concrete Powder": "Cemento verde",
  "Green Glazed Terracotta": "Azulejo verde",
  "Green Shulker Box": "Caja de shulker verde",
  "Green Stained Glass": "Vidrio verde",
  "Green Stained Glass Pane": "Panel de vidrio verde",
  "Green Terracotta": "Terracota verde",
  "Green Wall Banner": "Estandarte verde",
  "Green Wool": "Lana verde",
  "Grindstone": "Afiladora",
  "Hanging Roots": "Raíces colgantes",
  "Hay Block": "Bloque de heno",
  "Heavy Core": "Núcleo pesado",
  "Heavy Weighted Pressure Plate": "Placa de presión ponderada (pesada)",
  "Honey Block": "Bloque de miel",
  "Honeycomb Block": "Bloque de panal",
  "Hopper": "Tolva",
  "Horn Coral": "Coral de cuerno",
  "Horn Coral Block": "Bloque de coral de cuerno",
  "Horn Coral Fan": "Gorgonia de cuerno",
  "Horn Coral Wall Fan": "Gorgonia de cuerno en pared",
  "Ice": "Hielo",
  "Infested Chiseled Stone Bricks": "Ladrillos de piedra cincelados infestados",
  "Infested Cobblestone": "Adoquín infestado",
  "Infested Cracked Stone Bricks": "Ladrillos de piedra quebrados infestados",
  "Infested Deepslate": "Pizarra profunda infestada",
  "Infested Mossy Stone Bricks": "Ladrillos de piedra musgosos infestados",
  "Infested Stone": "Piedra infestada",
  "Infested Stone Bricks": "Ladrillos de piedra infestados",
  "Iron Bars": "Barrotes de hierro",
  "Iron Block": "Bloque de hierro",
  "Iron Chain": "Cadena de hierro",
  "Iron Door": "Puerta de hierro",
  "Iron Ore": "Mineral de hierro",
  "Iron Trapdoor": "Escotilla de hierro",
  "Jack O Lantern": "Zapallo de Halloween",
  "Jigsaw": "Bloque de rompecabezas",
  "Jukebox": "Tocadiscos",
  "Jungle Button": "Botón de jungla",
  "Jungle Door": "Puerta de jungla",
  "Jungle Fence": "Valla de jungla",
  "Jungle Fence Gate": "Puerta de valla de jungla",
  "Jungle Hanging Sign": "Cartel colgante de jungla",
  "Jungle Leaves": "Hojas de jungla",
  "Jungle Log": "Tronco de jungla",
  "Jungle Planks": "Madera de jungla",
  "Jungle Pressure Plate": "Placa de presión de jungla",
  "Jungle Sapling": "Brote de jungla",
  "Jungle Shelf": "Estante de jungla",
  "Jungle Sign": "Cartel de jungla",
  "Jungle Slab": "Baldosa de jungla",
  "Jungle Stairs": "Escaleras de jungla",
  "Jungle Trapdoor": "Escotilla de jungla",
  "Jungle Wall Hanging Sign": "Cartel colgante de jungla en pared",
  "Jungle Wall Sign": "Cartel de jungla en pared",
  "Jungle Wood": "Leño de jungla",
  "Kelp": "Alga",
  "Kelp Plant": "Tallo de alga",
  "Ladder": "Escalera",
  "Lantern": "Farol",
  "Lapis Block": "Bloque de lapislázuli",
  "Lapis Ore": "Mineral de lapislázuli",
  "Large Amethyst Bud": "Brote de amatista grande",
  "Large Fern": "Helecho alto",
  "Lava": "Lava",
  "Lava Cauldron": "Caldero con lava",
  "Leaf Litter": "Hojas secas",
  "Lectern": "Atril",
  "Lever": "Palanca",
  "Light": "Luz",
  "Light Blue Banner": "Estandarte celeste",
  "Light Blue Bed": "Cama celeste",
  "Light Blue Candle": "Vela celeste",
  "Light Blue Candle Cake": "Torta con vela celeste",
  "Light Blue Carpet": "Alfombra celeste",
  "Light Blue Concrete": "Concreto celeste",
  "Light Blue Concrete Powder": "Cemento celeste",
  "Light Blue Glazed Terracotta": "Azulejo celeste",
  "Light Blue Shulker Box": "Caja de shulker celeste",
  "Light Blue Stained Glass": "Vidrio celeste",
  "Light Blue Stained Glass Pane": "Panel de vidrio celeste",
  "Light Blue Terracotta": "Terracota celeste",
  "Light Blue Wall Banner": "Estandarte celeste",
  "Light Blue Wool": "Lana celeste",
  "Light Gray Banner": "Estandarte gris claro",
  "Light Gray Bed": "Cama gris claro",
  "Light Gray Candle": "Vela gris claro",
  "Light Gray Candle Cake": "Torta con vela gris claro",
  "Light Gray Carpet": "Alfombra gris claro",
  "Light Gray Concrete": "Concreto gris claro",
  "Light Gray Concrete Powder": "Cemento gris claro",
  "Light Gray Glazed Terracotta": "Azulejo gris claro",
  "Light Gray Shulker Box": "Caja de shulker gris claro",
  "Light Gray Stained Glass": "Vidrio gris claro",
  "Light Gray Stained Glass Pane": "Panel de vidrio gris claro",
  "Light Gray Terracotta": "Terracota gris claro",
  "Light Gray Wall Banner": "Estandarte gris claro",
  "Light Gray Wool": "Lana gris claro",
  "Light Weighted Pressure Plate": "Placa de presión ponderada (ligera)",
  "Lightning Rod": "Pararrayos",
  "Lilac": "Lila",
  "Lily of The Valley": "Lirio del valle",
  "Lily Pad": "Lirio de agua",
  "Lime Banner": "Estandarte verde lima",
  "Lime Bed": "Cama verde lima",
  "Lime Candle": "Vela verde lima",
  "Lime Candle Cake": "Torta con vela verde lima",
  "Lime Carpet": "Alfombra verde lima",
  "Lime Concrete": "Concreto verde lima",
  "Lime Concrete Powder": "Cemento verde lima",
  "Lime Glazed Terracotta": "Azulejo verde lima",
  "Lime Shulker Box": "Caja de shulker verde lima",
  "Lime Stained Glass": "Vidrio verde lima",
  "Lime Stained Glass Pane": "Panel de vidrio verde lima",
  "Lime Terracotta": "Terracota verde lima",
  "Lime Wall Banner": "Estandarte verde lima",
  "Lime Wool": "Lana verde lima",
  "Lodestone": "Magnetita",
  "Loom": "Máquina de telar",
  "Magenta Banner": "Estandarte magenta",
  "Magenta Bed": "Cama magenta",
  "Magenta Candle": "Vela magenta",
  "Magenta Candle Cake": "Torta con vela magenta",
  "Magenta Carpet": "Alfombra magenta",
  "Magenta Concrete": "Concreto magenta",
  "Magenta Concrete Powder": "Cemento magenta",
  "Magenta Glazed Terracotta": "Azulejo magenta",
  "Magenta Shulker Box": "Caja de shulker magenta",
  "Magenta Stained Glass": "Vidrio magenta",
  "Magenta Stained Glass Pane": "Panel de vidrio magenta",
  "Magenta Terracotta": "Terracota magenta",
  "Magenta Wall Banner": "Estandarte magenta",
  "Magenta Wool": "Lana magenta",
  "Magma Block": "Bloque de magma",
  "Mangrove Button": "Botón de mangle",
  "Mangrove Door": "Puerta de mangle",
  "Mangrove Fence": "Valla de mangle",
  "Mangrove Fence Gate": "Puerta de valla de mangle",
  "Mangrove Hanging Sign": "Cartel colgante de mangle",
  "Mangrove Leaves": "Hojas de mangle",
  "Mangrove Log": "Tronco de mangle",
  "Mangrove Planks": "Madera de mangle",
  "Mangrove Pressure Plate": "Placa de presión de mangle",
  "Mangrove Propagule": "Propágulo de mangle",
  "Mangrove Roots": "Raíces de mangle",
  "Mangrove Shelf": "Estante de mangle",
  "Mangrove Sign": "Cartel de mangle",
  "Mangrove Slab": "Baldosa de mangle",
  "Mangrove Stairs": "Escaleras de mangle",
  "Mangrove Trapdoor": "Escotilla de mangle",
  "Mangrove Wall Hanging Sign": "Cartel colgante de mangle en pared",
  "Mangrove Wall Sign": "Cartel de mangle en pared",
  "Mangrove Wood": "Leño de mangle",
  "Medium Amethyst Bud": "Brote de amatista mediano",
  "Melon": "Sandía",
  "Melon Stem": "Tallo de sandía",
  "Moss Block": "Bloque de musgo",
  "Moss Carpet": "Alfombra de musgo",
  "Mossy Cobblestone": "Adoquín musgoso",
  "Mossy Cobblestone Slab": "Baldosa de adoquín musgoso",
  "Mossy Cobblestone Stairs": "Escaleras de adoquín musgoso",
  "Mossy Cobblestone Wall": "Pared de adoquín musgoso",
  "Mossy Stone Brick Slab": "Baldosa de ladrillos de piedra musgosos",
  "Mossy Stone Brick Stairs": "Escaleras de ladrillos de piedra musgosos",
  "Mossy Stone Brick Wall": "Pared de ladrillos de piedra musgosos",
  "Mossy Stone Bricks": "Ladrillos de piedra musgosos",
  "Moving Piston": "Pistón en movimiento",
  "Mud": "Barro",
  "Mud Brick Slab": "Baldosa de ladrillos de adobe",
  "Mud Brick Stairs": "Escaleras de ladrillos de adobe",
  "Mud Brick Wall": "Pared de ladrillos de adobe",
  "Mud Bricks": "Ladrillos de adobe",
  "Muddy Mangrove Roots": "Raíces de mangle sucias",
  "Mushroom Stem": "Tallo de hongo",
  "Mycelium": "Micelio",
  "Nether Brick Fence": "Valla de ladrillos del Nether",
  "Nether Brick Slab": "Baldosa de ladrillos del Nether",
  "Nether Brick Stairs": "Escaleras de ladrillos del Nether",
  "Nether Brick Wall": "Pared de ladrillos del Nether",
  "Nether Bricks": "Ladrillos del Nether",
  "Nether Gold Ore": "Mineral de oro del Nether",
  "Nether Portal": "Portal del Nether",
  "Nether Quartz Ore": "Mineral de cuarzo del Nether",
  "Nether Sprouts": "Brotes del Nether",
  "Nether Wart": "Verruga del Nether",
  "Nether Wart Block": "Bloque de verrugas del Nether",
  "Netherite Block": "Bloque de netherita",
  "Netherrack": "Netherrack",
  "Note Block": "Bloque musical",
  "Oak Button": "Botón de roble",
  "Oak Door": "Puerta de roble",
  "Oak Fence": "Valla de roble",
  "Oak Fence Gate": "Puerta de valla de roble",
  "Oak Hanging Sign": "Cartel colgante de roble",
  "Oak Leaves": "Hojas de roble",
  "Oak Log": "Tronco de roble",
  "Oak Planks": "Madera de roble",
  "Oak Pressure Plate": "Placa de presión de roble",
  "Oak Sapling": "Brote de roble",
  "Oak Shelf": "Estante de roble",
  "Oak Sign": "Cartel de roble",
  "Oak Slab": "Baldosa de roble",
  "Oak Stairs": "Escaleras de roble",
  "Oak Trapdoor": "Escotilla de roble",
  "Oak Wall Hanging Sign": "Cartel colgante de roble en pared",
  "Oak Wall Sign": "Cartel de roble en pared",
  "Oak Wood": "Leño de roble",
  "Observer": "Observador",
  "Obsidian": "Obsidiana",
  "Ochre Froglight": "Luzapo ocre",
  "Open Eyeblossom": "Miraflor abierta",
  "Orange Banner": "Estandarte naranja",
  "Orange Bed": "Cama naranja",
  "Orange Candle": "Vela naranja",
  "Orange Candle Cake": "Torta con vela naranja",
  "Orange Carpet": "Alfombra naranja",
  "Orange Concrete": "Concreto naranja",
  "Orange Concrete Powder": "Cemento naranja",
  "Orange Glazed Terracotta": "Azulejo naranja",
  "Orange Shulker Box": "Caja de shulker naranja",
  "Orange Stained Glass": "Vidrio naranja",
  "Orange Stained Glass Pane": "Panel de vidrio naranja",
  "Orange Terracotta": "Terracota naranja",
  "Orange Tulip": "Tulipán naranja",
  "Orange Wall Banner": "Estandarte naranja",
  "Orange Wool": "Lana naranja",
  "Oxeye Daisy": "Margarita",
  "Oxidized Chiseled Copper": "Cobre cincelado oxidado",
  "Oxidized Copper": "Cobre oxidado",
  "Oxidized Copper Bars": "Barrotes de cobre oxidado",
  "Oxidized Copper Bulb": "Lámpara de cobre oxidado",
  "Oxidized Copper Chain": "Cadena de cobre oxidado",
  "Oxidized Copper Chest": "Cofre de cobre oxidado",
  "Oxidized Copper Door": "Puerta de cobre oxidado",
  "Oxidized Copper Golem Statue": "Estatua de gólem de cobre oxidado",
  "Oxidized Copper Grate": "Rejilla de cobre oxidado",
  "Oxidized Copper Lantern": "Farol de cobre oxidado",
  "Oxidized Copper Trapdoor": "Escotilla de cobre oxidado",
  "Oxidized Cut Copper": "Cobre cortado oxidado",
  "Oxidized Cut Copper Slab": "Baldosa de cobre cortado oxidado",
  "Oxidized Cut Copper Stairs": "Escaleras de cobre cortado oxidado",
  "Oxidized Lightning Rod": "Pararrayos oxidado",
  "Packed Ice": "Hielo comprimido",
  "Packed Mud": "Adobe",
  "Pale Hanging Moss": "Musgo pálido colgante",
  "Pale Moss Block": "Bloque de musgo pálido",
  "Pale Moss Carpet": "Alfombra de musgo pálido",
  "Pale Oak Button": "Botón de roble pálido",
  "Pale Oak Door": "Puerta de roble pálido",
  "Pale Oak Fence": "Valla de roble pálido",
  "Pale Oak Fence Gate": "Puerta de valla de roble pálido",
  "Pale Oak Hanging Sign": "Cartel colgante de roble pálido",
  "Pale Oak Leaves": "Hojas de roble pálido",
  "Pale Oak Log": "Tronco de roble pálido",
  "Pale Oak Planks": "Madera de roble pálido",
  "Pale Oak Pressure Plate": "Placa de presión de roble pálido",
  "Pale Oak Sapling": "Brote de roble pálido",
  "Pale Oak Shelf": "Estante de roble pálido",
  "Pale Oak Sign": "Cartel de roble pálido",
  "Pale Oak Slab": "Baldosa de roble pálido",
  "Pale Oak Stairs": "Escaleras de roble pálido",
  "Pale Oak Trapdoor": "Escotilla de roble pálido",
  "Pale Oak Wall Hanging Sign": "Cartel colgante de roble pálido en pared",
  "Pale Oak Wall Sign": "Cartel de roble pálido en pared",
  "Pale Oak Wood": "Leño de roble pálido",
  "Pearlescent Froglight": "Luzapo perlada",
  "Peony": "Peonía",
  "Petrified Oak Slab": "Baldosa de roble petrificada",
  "Piglin Head": "Cabeza de piglin",
  "Piglin Wall Head": "Cabeza de piglin en pared",
  "Pink Banner": "Estandarte rosa",
  "Pink Bed": "Cama rosa",
  "Pink Candle": "Vela rosada",
  "Pink Candle Cake": "Torta con vela rosada",
  "Pink Carpet": "Alfombra rosa",
  "Pink Concrete": "Concreto rosa",
  "Pink Concrete Powder": "Cemento rosa",
  "Pink Glazed Terracotta": "Azulejo rosa",
  "Pink Petals": "Pétalos rosas",
  "Pink Shulker Box": "Caja de shulker rosa",
  "Pink Stained Glass": "Vidrio rosa",
  "Pink Stained Glass Pane": "Panel de vidrio rosa",
  "Pink Terracotta": "Terracota rosa",
  "Pink Tulip": "Tulipán rosa",
  "Pink Wall Banner": "Estandarte rosa",
  "Pink Wool": "Lana rosa",
  "Piston": "Pistón",
  "Piston Head": "Cabeza de pistón",
  "Pitcher Crop": "Cultivo de odre",
  "Pitcher Plant": "Planta odre",
  "Player Head": "Cabeza de jugador",
  "Player Wall Head": "Cabeza de jugador en pared",
  "Podzol": "Podsol",
  "Pointed Dripstone": "Espeleotema puntiagudo",
  "Polished Andesite": "Andesita pulida",
  "Polished Andesite Slab": "Baldosa de andesita pulida",
  "Polished Andesite Stairs": "Escaleras de andesita pulida",
  "Polished Basalt": "Basalto pulido",
  "Polished Blackstone": "Piedra negra pulida",
  "Polished Blackstone Brick Slab": "Baldosa de ladrillos de piedra negra pulida",
  "Polished Blackstone Brick Stairs": "Escaleras de ladrillos de piedra negra pulida",
  "Polished Blackstone Brick Wall": "Pared de ladrillos de piedra negra pulida",
  "Polished Blackstone Bricks": "Ladrillos de piedra negra pulida",
  "Polished Blackstone Button": "Botón de piedra negra pulida",
  "Polished Blackstone Pressure Plate": "Placa de presión de piedra negra pulida",
  "Polished Blackstone Slab": "Baldosa de piedra negra pulida",
  "Polished Blackstone Stairs": "Escaleras de piedra negra pulida",
  "Polished Blackstone Wall": "Pared de piedra negra pulida",
  "Polished Cinnabar": "Cinabrio pulido",
  "Polished Cinnabar Slab": "Baldosa de cinabrio pulido",
  "Polished Cinnabar Stairs": "Escaleras de cinabrio pulido",
  "Polished Cinnabar Wall": "Pared de cinabrio pulido",
  "Polished Deepslate": "Pizarra profunda pulida",
  "Polished Deepslate Slab": "Baldosa de pizarra profunda pulida",
  "Polished Deepslate Stairs": "Escaleras de pizarra profunda pulida",
  "Polished Deepslate Wall": "Pared de pizarra profunda pulida",
  "Polished Diorite": "Diorita pulida",
  "Polished Diorite Slab": "Baldosa de diorita pulida",
  "Polished Diorite Stairs": "Escaleras de diorita pulida",
  "Polished Granite": "Granito pulido",
  "Polished Granite Slab": "Baldosa de granito pulido",
  "Polished Granite Stairs": "Escaleras de granito pulido",
  "Polished Sulfur": "Azufre pulido",
  "Polished Sulfur Slab": "Baldosa de azufre pulido",
  "Polished Sulfur Stairs": "Escaleras de azufre pulido",
  "Polished Sulfur Wall": "Pared de azufre pulido",
  "Polished Tuff": "Toba pulida",
  "Polished Tuff Slab": "Baldosa de toba pulida",
  "Polished Tuff Stairs": "Escaleras de toba pulida",
  "Polished Tuff Wall": "Pared de toba pulida",
  "Poppy": "Amapola",
  "Potatoes": "Papas",
  "Potent Sulfur": "Azufre potente",
  "Potted Acacia Sapling": "Maceta con brote de acacia",
  "Potted Allium": "Maceta con allium",
  "Potted Azalea Bush": "Maceta con azalea",
  "Potted Azure Bluet": "Maceta con rubiácea",
  "Potted Bamboo": "Maceta con bambú",
  "Potted Birch Sapling": "Maceta con brote de abedul",
  "Potted Blue Orchid": "Maceta con orquídea azul",
  "Potted Brown Mushroom": "Maceta con hongo marrón",
  "Potted Cactus": "Maceta con cactus",
  "Potted Cherry Sapling": "Jarrón con brote de cerezo",
  "Potted Closed Eyeblossom": "Maceta con miraflor cerrada",
  "Potted Cornflower": "Maceta con aciano",
  "Potted Crimson Fungus": "Maceta con hongo carmesí",
  "Potted Crimson Roots": "Maceta con yuyos carmesí",
  "Potted Dandelion": "Maceta con diente de león",
  "Potted Dark Oak Sapling": "Maceta con brote de roble oscuro",
  "Potted Dead Bush": "Maceta con arbusto muerto",
  "Potted Fern": "Maceta con helecho",
  "Potted Flowering Azalea Bush": "Maceta con azalea florida",
  "Potted Golden Dandelion": "Maceta con diente de león dorado",
  "Potted Jungle Sapling": "Maceta con brote de jungla",
  "Potted Lily of The Valley": "Maceta con lirio del valle",
  "Potted Mangrove Propagule": "Maceta con propágulo de mangle",
  "Potted Oak Sapling": "Maceta con brote de roble",
  "Potted Open Eyeblossom": "Maceta con miraflor abierta",
  "Potted Orange Tulip": "Maceta con tulipán naranja",
  "Potted Oxeye Daisy": "Maceta con margarita",
  "Potted Pale Oak Sapling": "Maceta con brote de roble pálido",
  "Potted Pink Tulip": "Maceta con tulipán rosa",
  "Potted Poppy": "Maceta con amapola",
  "Potted Red Mushroom": "Maceta con hongo rojo",
  "Potted Red Tulip": "Maceta con tulipán rojo",
  "Potted Spruce Sapling": "Maceta con brote de abeto",
  "Potted Torchflower": "Maceta con anflorcha",
  "Potted Warped Fungus": "Maceta con hongo distorsionado",
  "Potted Warped Roots": "Maceta con yuyos distorsionados",
  "Potted White Tulip": "Maceta con tulipán blanco",
  "Potted Wither Rose": "Maceta con rosa del Wither",
  "Powder Snow": "Nieve polvo",
  "Powder Snow Cauldron": "Caldero con nieve polvo",
  "Powered Rail": "Vía propulsora",
  "Prismarine": "Prismarina",
  "Prismarine Brick Slab": "Baldosa de ladrillos de prismarina",
  "Prismarine Brick Stairs": "Escaleras de ladrillos de prismarina",
  "Prismarine Bricks": "Ladrillos de prismarina",
  "Prismarine Slab": "Baldosa de prismarina",
  "Prismarine Stairs": "Escaleras de prismarina",
  "Prismarine Wall": "Pared de prismarina",
  "Pumpkin": "Zapallo",
  "Pumpkin Stem": "Tallo de zapallo",
  "Purple Banner": "Estandarte violeta",
  "Purple Bed": "Cama violeta",
  "Purple Candle": "Vela violeta",
  "Purple Candle Cake": "Torta con vela violeta",
  "Purple Carpet": "Alfombra violeta",
  "Purple Concrete": "Concreto violeta",
  "Purple Concrete Powder": "Cemento violeta",
  "Purple Glazed Terracotta": "Azulejo violeta",
  "Purple Shulker Box": "Caja de shulker violeta",
  "Purple Stained Glass": "Vidrio violeta",
  "Purple Stained Glass Pane": "Panel de vidrio violeta",
  "Purple Terracotta": "Terracota violeta",
  "Purple Wall Banner": "Estandarte violeta",
  "Purple Wool": "Lana violeta",
  "Purpur Block": "Purpur",
  "Purpur Pillar": "Columna de purpur",
  "Purpur Slab": "Baldosa de purpur",
  "Purpur Stairs": "Escaleras de purpur",
  "Quartz Block": "Cuarzo",
  "Quartz Bricks": "Ladrillos de cuarzo",
  "Quartz Pillar": "Columna de cuarzo",
  "Quartz Slab": "Baldosa de cuarzo",
  "Quartz Stairs": "Escaleras de cuarzo",
  "Rail": "Vía",
  "Raw Copper Block": "Bloque de cobre crudo",
  "Raw Gold Block": "Bloque de oro crudo",
  "Raw Iron Block": "Bloque de hierro crudo",
  "Red Banner": "Estandarte rojo",
  "Red Bed": "Cama roja",
  "Red Candle": "Vela roja",
  "Red Candle Cake": "Torta con vela roja",
  "Red Carpet": "Alfombra roja",
  "Red Concrete": "Concreto rojo",
  "Red Concrete Powder": "Cemento rojo",
  "Red Glazed Terracotta": "Azulejo rojo",
  "Red Mushroom": "Hongo rojo",
  "Red Mushroom Block": "Bloque de hongo rojo",
  "Red Nether Brick Slab": "Baldosa de ladrillos del Nether rojos",
  "Red Nether Brick Stairs": "Escaleras de ladrillos del Nether rojos",
  "Red Nether Brick Wall": "Pared de ladrillos del Nether rojos",
  "Red Nether Bricks": "Ladrillos del Nether rojos",
  "Red Sand": "Arena rojiza",
  "Red Sandstone": "Arenisca rojiza",
  "Red Sandstone Slab": "Baldosa de arenisca rojiza",
  "Red Sandstone Stairs": "Escaleras de arenisca rojiza",
  "Red Sandstone Wall": "Pared de arenisca rojiza",
  "Red Shulker Box": "Caja de shulker roja",
  "Red Stained Glass": "Vidrio rojo",
  "Red Stained Glass Pane": "Panel de vidrio rojo",
  "Red Terracotta": "Terracota roja",
  "Red Tulip": "Tulipán rojo",
  "Red Wall Banner": "Estandarte rojo",
  "Red Wool": "Lana roja",
  "Redstone Block": "Bloque de redstone",
  "Redstone Lamp": "Lámpara de redstone",
  "Redstone Ore": "Mineral de redstone",
  "Redstone Torch": "Antorcha de redstone",
  "Redstone Wall Torch": "Antorcha de redstone en pared",
  "Redstone Wire": "Cable de redstone",
  "Reinforced Deepslate": "Pizarra profunda reforzada",
  "Repeater": "Repetidor de redstone",
  "Repeating Command Block": "Bloque de comandos de repetición",
  "Resin Block": "Bloque de resina",
  "Resin Brick Slab": "Baldosa de ladrillos de resina",
  "Resin Brick Stairs": "Escaleras de ladrillos de resina",
  "Resin Brick Wall": "Pared de ladrillos de resina",
  "Resin Bricks": "Bloque de ladrillos de resina",
  "Resin Clump": "Terrón de resina",
  "Respawn Anchor": "Nexo de reaparición",
  "Rooted Dirt": "Tierra enraizada",
  "Rose Bush": "Rosal",
  "Sand": "Arena",
  "Sandstone": "Arenisca",
  "Sandstone Slab": "Baldosa de arenisca",
  "Sandstone Stairs": "Escaleras de arenisca",
  "Sandstone Wall": "Pared de arenisca",
  "Scaffolding": "Andamio",
  "Sculk": "Sculk",
  "Sculk Catalyst": "Catalizador de sculk",
  "Sculk Sensor": "Sensor de sculk",
  "Sculk Shrieker": "Chillador de sculk",
  "Sculk Vein": "Vena de sculk",
  "Sea Lantern": "Linterna del mar",
  "Sea Pickle": "Pepino de mar",
  "Seagrass": "Planta marina",
  "Short Dry Grass": "Pasto seco corto",
  "Short Grass": "Pasto corto",
  "Shroomlight": "Hongo luminoso",
  "Shulker Box": "Caja de shulker",
  "Skeleton Skull": "Cráneo de esqueleto",
  "Skeleton Wall Skull": "Cráneo de esqueleto en pared",
  "Slime Block": "Bloque de slime",
  "Small Amethyst Bud": "Brote de amatista pequeño",
  "Small Dripleaf": "Plantaforma pequeña",
  "Smithing Table": "Mesa de herrería",
  "Smoker": "Ahumador",
  "Smooth Basalt": "Basalto liso",
  "Smooth Quartz": "Cuarzo liso",
  "Smooth Quartz Slab": "Baldosa de cuarzo liso",
  "Smooth Quartz Stairs": "Escaleras de cuarzo liso",
  "Smooth Red Sandstone": "Arenisca rojiza lisa",
  "Smooth Red Sandstone Slab": "Baldosa de arenisca rojiza lisa",
  "Smooth Red Sandstone Stairs": "Escaleras de arenisca rojiza lisa",
  "Smooth Sandstone": "Arenisca lisa",
  "Smooth Sandstone Slab": "Baldosa de arenisca lisa",
  "Smooth Sandstone Stairs": "Escaleras de arenisca lisa",
  "Smooth Stone": "Piedra lisa",
  "Smooth Stone Slab": "Baldosa de piedra lisa",
  "Sniffer Egg": "Huevo de sniffer",
  "Snow": "Nieve",
  "Snow Block": "Bloque de nieve",
  "Soul Campfire": "Fogata de almas",
  "Soul Fire": "Fuego de almas",
  "Soul Lantern": "Farol de almas",
  "Soul Sand": "Arena de almas",
  "Soul Soil": "Tierra de almas",
  "Soul Torch": "Antorcha de almas",
  "Soul Wall Torch": "Antorcha de almas en pared",
  "Spawner": "Generador de criaturas",
  "Sponge": "Esponja",
  "Spore Blossom": "Flor de esporas",
  "Spruce Button": "Botón de abeto",
  "Spruce Door": "Puerta de abeto",
  "Spruce Fence": "Valla de abeto",
  "Spruce Fence Gate": "Puerta de valla de abeto",
  "Spruce Hanging Sign": "Cartel colgante de abeto",
  "Spruce Leaves": "Hojas de abeto",
  "Spruce Log": "Tronco de abeto",
  "Spruce Planks": "Madera de abeto",
  "Spruce Pressure Plate": "Placa de presión de abeto",
  "Spruce Sapling": "Brote de abeto",
  "Spruce Shelf": "Estante de abeto",
  "Spruce Sign": "Cartel de abeto",
  "Spruce Slab": "Baldosa de abeto",
  "Spruce Stairs": "Escaleras de abeto",
  "Spruce Trapdoor": "Escotilla de abeto",
  "Spruce Wall Hanging Sign": "Cartel colgante de abeto en pared",
  "Spruce Wall Sign": "Cartel de abeto en pared",
  "Spruce Wood": "Leño de abeto",
  "Sticky Piston": "Pistón pegajoso",
  "Stone": "Piedra",
  "Stone Brick Slab": "Baldosa de ladrillos de piedra",
  "Stone Brick Stairs": "Escaleras de ladrillos de piedra",
  "Stone Brick Wall": "Pared de ladrillos de piedra",
  "Stone Bricks": "Ladrillos de piedra",
  "Stone Button": "Botón de piedra",
  "Stone Pressure Plate": "Placa de presión de piedra",
  "Stone Slab": "Baldosa de piedra",
  "Stone Stairs": "Escaleras de piedra",
  "Stonecutter": "Cortapiedras",
  "Stripped Acacia Log": "Tronco de acacia sin corteza",
  "Stripped Acacia Wood": "Leño de acacia sin corteza",
  "Stripped Bamboo Block": "Bloque de bambú sin corteza",
  "Stripped Birch Log": "Tronco de abedul sin corteza",
  "Stripped Birch Wood": "Leño de abedul sin corteza",
  "Stripped Cherry Log": "Tronco de cerezo sin corteza",
  "Stripped Cherry Wood": "Leño de cerezo sin corteza",
  "Stripped Crimson Hyphae": "Hifas carmesí sin corteza",
  "Stripped Crimson Stem": "Tallo carmesí sin corteza",
  "Stripped Dark Oak Log": "Tronco de roble oscuro sin corteza",
  "Stripped Dark Oak Wood": "Leño de roble oscuro sin corteza",
  "Stripped Jungle Log": "Tronco de jungla sin corteza",
  "Stripped Jungle Wood": "Leño de jungla sin corteza",
  "Stripped Mangrove Log": "Tronco de mangle sin corteza",
  "Stripped Mangrove Wood": "Leño de mangle sin corteza",
  "Stripped Oak Log": "Tronco de roble sin corteza",
  "Stripped Oak Wood": "Leño de roble sin corteza",
  "Stripped Pale Oak Log": "Tronco de roble pálido sin corteza",
  "Stripped Pale Oak Wood": "Leño de roble pálido sin corteza",
  "Stripped Spruce Log": "Tronco de abeto sin corteza",
  "Stripped Spruce Wood": "Leño de abeto sin corteza",
  "Stripped Warped Hyphae": "Hifas distorsionadas sin corteza",
  "Stripped Warped Stem": "Tallo distorsionado sin corteza",
  "Structure Block": "Bloque de estructuras",
  "Structure Void": "Vacío de estructuras",
  "Sugar Cane": "Caña de azúcar",
  "Sulfur": "Azufre",
  "Sulfur Brick Slab": "Baldosa de ladrillos de azufre",
  "Sulfur Brick Stairs": "Escaleras de ladrillos de azufre",
  "Sulfur Brick Wall": "Pared de ladrillos de azufre",
  "Sulfur Bricks": "Ladrillos de azufre",
  "Sulfur Slab": "Baldosa de azufre",
  "Sulfur Spike": "Azufre puntiagudo",
  "Sulfur Stairs": "Escaleras de azufre",
  "Sulfur Wall": "Pared de azufre",
  "Sunflower": "Girasol",
  "Suspicious Gravel": "Grava sospechosa",
  "Suspicious Sand": "Arena sospechosa",
  "Sweet Berry Bush": "Arbusto de bayas dulces",
  "Tall Dry Grass": "Pasto seco alto",
  "Tall Grass": "Pasto alto",
  "Tall Seagrass": "Planta marina alta",
  "Target": "Diana",
  "Terracotta": "Terracota",
  "Test Block": "Bloque de pruebas",
  "Test Instance Block": "Bloque de caso de prueba",
  "Tinted Glass": "Vidrio opaco",
  "Tnt": "TNT",
  "Torch": "Antorcha",
  "Torchflower": "Anflorcha",
  "Torchflower Crop": "Cultivo de anflorcha",
  "Trapped Chest": "Cofre con trampa",
  "Trial Spawner": "Generador de desafío",
  "Tripwire": "Hilo trampa",
  "Tripwire Hook": "Gancho de hilo",
  "Tube Coral": "Coral de tubo",
  "Tube Coral Block": "Bloque de coral de tubo",
  "Tube Coral Fan": "Gorgonia de tubo",
  "Tube Coral Wall Fan": "Gorgonia de tubo en pared",
  "Tuff": "Toba",
  "Tuff Brick Slab": "Baldosa de ladrillos de toba",
  "Tuff Brick Stairs": "Escaleras de ladrillos de toba",
  "Tuff Brick Wall": "Pared de ladrillos de toba",
  "Tuff Bricks": "Ladrillos de toba",
  "Tuff Slab": "Baldosa de toba",
  "Tuff Stairs": "Escaleras de toba",
  "Tuff Wall": "Pared de toba",
  "Turtle Egg": "Huevo de tortuga",
  "Twisting Vines": "Enredaderas retorcidas",
  "Twisting Vines Plant": "Planta de enredaderas retorcidas",
  "Vault": "Arca",
  "Verdant Froglight": "Luzapo verdosa",
  "Vine": "Enredaderas",
  "Void Air": "Aire del vacío",
  "Wall Torch": "Antorcha en pared",
  "Warped Button": "Botón distorsionado",
  "Warped Door": "Puerta distorsionada",
  "Warped Fence": "Valla distorsionada",
  "Warped Fence Gate": "Puerta de valla distorsionada",
  "Warped Fungus": "Hongo distorsionado",
  "Warped Hanging Sign": "Cartel colgante distorsionado",
  "Warped Hyphae": "Hifas distorsionadas",
  "Warped Nylium": "Nilio distorsionado",
  "Warped Planks": "Madera distorsionada",
  "Warped Pressure Plate": "Placa de presión distorsionada",
  "Warped Roots": "Yuyos distorsionados",
  "Warped Shelf": "Estante distorsionado",
  "Warped Sign": "Cartel distorsionado",
  "Warped Slab": "Baldosa distorsionada",
  "Warped Stairs": "Escaleras distorsionadas",
  "Warped Stem": "Tallo distorsionado",
  "Warped Trapdoor": "Escotilla distorsionada",
  "Warped Wall Hanging Sign": "Cartel colgante distorsionado en pared",
  "Warped Wall Sign": "Cartel distorsionado en pared",
  "Warped Wart Block": "Bloque de verrugas distorsionadas",
  "Water": "Agua",
  "Water Cauldron": "Caldero con agua",
  "Waxed Chiseled Copper": "Cobre cincelado encerado",
  "Waxed Copper Bars": "Barrotes de cobre encerado",
  "Waxed Copper Block": "Bloque de cobre encerado",
  "Waxed Copper Bulb": "Lámpara de cobre encerado",
  "Waxed Copper Chain": "Cadena de cobre encerado",
  "Waxed Copper Chest": "Cofre de cobre encerado",
  "Waxed Copper Door": "Puerta de cobre encerado",
  "Waxed Copper Golem Statue": "Estatua de gólem de cobre encerado",
  "Waxed Copper Grate": "Rejilla de cobre encerado",
  "Waxed Copper Lantern": "Farol de cobre encerado",
  "Waxed Copper Trapdoor": "Escotilla de cobre encerado",
  "Waxed Cut Copper": "Cobre cortado encerado",
  "Waxed Cut Copper Slab": "Baldosa de cobre cortado encerado",
  "Waxed Cut Copper Stairs": "Escaleras de cobre cortado encerado",
  "Waxed Exposed Chiseled Copper": "Cobre cincelado expuesto encerado",
  "Waxed Exposed Copper": "Cobre expuesto encerado",
  "Waxed Exposed Copper Bars": "Barrotes de cobre expuesto encerado",
  "Waxed Exposed Copper Bulb": "Lámpara de cobre expuesto encerado",
  "Waxed Exposed Copper Chain": "Cadena de cobre expuesto encerado",
  "Waxed Exposed Copper Chest": "Cofre de cobre expuesto encerado",
  "Waxed Exposed Copper Door": "Puerta de cobre expuesto encerado",
  "Waxed Exposed Copper Golem Statue": "Estatua de gólem de cobre expuesto encerado",
  "Waxed Exposed Copper Grate": "Rejilla de cobre expuesto encerado",
  "Waxed Exposed Copper Lantern": "Farol de cobre expuesto encerado",
  "Waxed Exposed Copper Trapdoor": "Escotilla de cobre expuesto encerado",
  "Waxed Exposed Cut Copper": "Cobre cortado expuesto encerado",
  "Waxed Exposed Cut Copper Slab": "Baldosa de cobre cortado expuesto encerado",
  "Waxed Exposed Cut Copper Stairs": "Escaleras de cobre cortado expuesto encerado",
  "Waxed Exposed Lightning Rod": "Pararrayos expuesto encerado",
  "Waxed Lightning Rod": "Pararrayos encerado",
  "Waxed Oxidized Chiseled Copper": "Cobre cincelado oxidado encerado",
  "Waxed Oxidized Copper": "Cobre oxidado encerado",
  "Waxed Oxidized Copper Bars": "Barrotes de cobre oxidado encerado",
  "Waxed Oxidized Copper Bulb": "Lámpara de cobre oxidado encerado",
  "Waxed Oxidized Copper Chain": "Cadena de cobre oxidado encerado",
  "Waxed Oxidized Copper Chest": "Cofre de cobre oxidado encerado",
  "Waxed Oxidized Copper Door": "Puerta de cobre oxidado encerado",
  "Waxed Oxidized Copper Golem Statue": "Estatua de gólem de cobre oxidado encerado",
  "Waxed Oxidized Copper Grate": "Rejilla de cobre oxidado encerado",
  "Waxed Oxidized Copper Lantern": "Farol de cobre oxidado encerado",
  "Waxed Oxidized Copper Trapdoor": "Escotilla de cobre oxidado encerado",
  "Waxed Oxidized Cut Copper": "Cobre cortado oxidado encerado",
  "Waxed Oxidized Cut Copper Slab": "Baldosa de cobre cortado oxidado encerado",
  "Waxed Oxidized Cut Copper Stairs": "Escaleras de cobre cortado oxidado encerado",
  "Waxed Oxidized Lightning Rod": "Pararrayos oxidado encerado",
  "Waxed Weathered Chiseled Copper": "Cobre cincelado degradado encerado",
  "Waxed Weathered Copper": "Cobre degradado encerado",
  "Waxed Weathered Copper Bars": "Barrotes de cobre degradado encerado",
  "Waxed Weathered Copper Bulb": "Lámpara de cobre degradado encerado",
  "Waxed Weathered Copper Chain": "Cadena de cobre degradado encerado",
  "Waxed Weathered Copper Chest": "Cofre de cobre degradado encerado",
  "Waxed Weathered Copper Door": "Puerta de cobre degradado encerado",
  "Waxed Weathered Copper Golem Statue": "Estatua de gólem de cobre degradado encerado",
  "Waxed Weathered Copper Grate": "Rejilla de cobre degradado encerado",
  "Waxed Weathered Copper Lantern": "Farol de cobre degradado encerado",
  "Waxed Weathered Copper Trapdoor": "Escotilla de cobre degradado encerado",
  "Waxed Weathered Cut Copper": "Cobre cortado degradado encerado",
  "Waxed Weathered Cut Copper Slab": "Baldosa de cobre cortado degradado encerado",
  "Waxed Weathered Cut Copper Stairs": "Escaleras de cobre cortado degradado encerado",
  "Waxed Weathered Lightning Rod": "Pararrayos degradado encerado",
  "Weathered Chiseled Copper": "Cobre cincelado degradado",
  "Weathered Copper": "Cobre degradado",
  "Weathered Copper Bars": "Barrotes de cobre degradado",
  "Weathered Copper Bulb": "Lámpara de cobre degradado",
  "Weathered Copper Chain": "Cadena de cobre degradado",
  "Weathered Copper Chest": "Cofre de cobre degradado",
  "Weathered Copper Door": "Puerta de cobre degradado",
  "Weathered Copper Golem Statue": "Estatua de gólem de cobre degradado",
  "Weathered Copper Grate": "Rejilla de cobre degradado",
  "Weathered Copper Lantern": "Farol de cobre degradado",
  "Weathered Copper Trapdoor": "Escotilla de cobre degradado",
  "Weathered Cut Copper": "Cobre cortado degradado",
  "Weathered Cut Copper Slab": "Baldosa de cobre cortado degradado",
  "Weathered Cut Copper Stairs": "Escaleras de cobre cortado degradado",
  "Weathered Lightning Rod": "Pararrayos degradado",
  "Weeping Vines": "Enredaderas lloronas",
  "Weeping Vines Plant": "Planta de enredaderas lloronas",
  "Wet Sponge": "Esponja húmeda",
  "Wheat": "Cultivo de trigo",
  "White Banner": "Estandarte blanco",
  "White Bed": "Cama blanca",
  "White Candle": "Vela blanca",
  "White Candle Cake": "Torta con vela blanca",
  "White Carpet": "Alfombra blanca",
  "White Concrete": "Concreto blanco",
  "White Concrete Powder": "Cemento blanco",
  "White Glazed Terracotta": "Azulejo blanco",
  "White Shulker Box": "Caja de shulker blanca",
  "White Stained Glass": "Vidrio blanco",
  "White Stained Glass Pane": "Panel de vidrio blanco",
  "White Terracotta": "Terracota blanca",
  "White Tulip": "Tulipán blanco",
  "White Wall Banner": "Estandarte blanco",
  "White Wool": "Lana blanca",
  "Wildflowers": "Flores silvestres",
  "Wither Rose": "Rosa del Wither",
  "Wither Skeleton Skull": "Cráneo de esqueleto del Wither",
  "Wither Skeleton Wall Skull": "Cráneo de esqueleto del Wither en pared",
  "Yellow Banner": "Estandarte amarillo",
  "Yellow Bed": "Cama amarilla",
  "Yellow Candle": "Vela amarilla",
  "Yellow Candle Cake": "Torta con vela amarilla",
  "Yellow Carpet": "Alfombra amarilla",
  "Yellow Concrete": "Concreto amarillo",
  "Yellow Concrete Powder": "Cemento amarillo",
  "Yellow Glazed Terracotta": "Azulejo amarillo",
  "Yellow Shulker Box": "Caja de shulker amarilla",
  "Yellow Stained Glass": "Vidrio amarillo",
  "Yellow Stained Glass Pane": "Panel de vidrio amarillo",
  "Yellow Terracotta": "Terracota amarilla",
  "Yellow Wall Banner": "Estandarte amarillo",
  "Yellow Wool": "Lana amarilla",
  "Zombie Head": "Cabeza de zombi",
  "Zombie Wall Head": "Cabeza de zombi en pared"
};

const categoriesData = {
  "nuevos": [
    {
      "name": "Chiseled Cinnabar",
      "tags": []
    },
    {
      "name": "Chiseled Sulfur",
      "tags": []
    },
    {
      "name": "Cinnabar",
      "tags": []
    },
    {
      "name": "Cinnabar Brick Slab",
      "tags": []
    },
    {
      "name": "Cinnabar Brick Stairs",
      "tags": []
    },
    {
      "name": "Cinnabar Brick Wall",
      "tags": []
    },
    {
      "name": "Cinnabar Bricks",
      "tags": []
    },
    {
      "name": "Cinnabar Slab",
      "tags": []
    },
    {
      "name": "Cinnabar Stairs",
      "tags": []
    },
    {
      "name": "Cinnabar Wall",
      "tags": []
    },
    {
      "name": "Polished Cinnabar",
      "tags": []
    },
    {
      "name": "Polished Cinnabar Slab",
      "tags": []
    },
    {
      "name": "Polished Cinnabar Stairs",
      "tags": []
    },
    {
      "name": "Polished Cinnabar Wall",
      "tags": []
    },
    {
      "name": "Polished Sulfur",
      "tags": []
    },
    {
      "name": "Polished Sulfur Slab",
      "tags": []
    },
    {
      "name": "Polished Sulfur Stairs",
      "tags": []
    },
    {
      "name": "Polished Sulfur Wall",
      "tags": []
    },
    {
      "name": "Potent Sulfur",
      "tags": []
    },
    {
      "name": "Sulfur",
      "tags": []
    },
    {
      "name": "Sulfur Brick Slab",
      "tags": []
    },
    {
      "name": "Sulfur Brick Stairs",
      "tags": []
    },
    {
      "name": "Sulfur Brick Wall",
      "tags": []
    },
    {
      "name": "Sulfur Bricks",
      "tags": []
    },
    {
      "name": "Sulfur Slab",
      "tags": []
    },
    {
      "name": "Sulfur Spike",
      "tags": []
    },
    {
      "name": "Sulfur Stairs",
      "tags": []
    },
    {
      "name": "Sulfur Wall",
      "tags": []
    }
  ],
  "construccion": [
    {
      "name": "Air",
      "tags": []
    },
    {
      "name": "Ancient Debris",
      "tags": []
    },
    {
      "name": "Andesite",
      "tags": []
    },
    {
      "name": "Andesite Slab",
      "tags": []
    },
    {
      "name": "Andesite Stairs",
      "tags": []
    },
    {
      "name": "Andesite Wall",
      "tags": []
    },
    {
      "name": "Azalea",
      "tags": []
    },
    {
      "name": "Azure Bluet",
      "tags": []
    },
    {
      "name": "Bee Nest",
      "tags": []
    },
    {
      "name": "Beehive",
      "tags": []
    },
    {
      "name": "Beetroots",
      "tags": []
    },
    {
      "name": "Bell",
      "tags": []
    },
    {
      "name": "Big Dripleaf",
      "tags": []
    },
    {
      "name": "Big Dripleaf Stem",
      "tags": []
    },
    {
      "name": "Blast Furnace",
      "tags": []
    },
    {
      "name": "Blue Orchid",
      "tags": []
    },
    {
      "name": "Bone Block",
      "tags": []
    },
    {
      "name": "Bookshelf",
      "tags": []
    },
    {
      "name": "Brewing Stand",
      "tags": []
    },
    {
      "name": "Brick Slab",
      "tags": []
    },
    {
      "name": "Brick Stairs",
      "tags": []
    },
    {
      "name": "Brick Wall",
      "tags": []
    },
    {
      "name": "Bricks",
      "tags": []
    },
    {
      "name": "Bubble Column",
      "tags": []
    },
    {
      "name": "Cactus",
      "tags": []
    },
    {
      "name": "Cake",
      "tags": []
    },
    {
      "name": "Calcite",
      "tags": []
    },
    {
      "name": "Campfire",
      "tags": []
    },
    {
      "name": "Carrots",
      "tags": []
    },
    {
      "name": "Cartography Table",
      "tags": []
    },
    {
      "name": "Cauldron",
      "tags": []
    },
    {
      "name": "Cave Air",
      "tags": []
    },
    {
      "name": "Chiseled Bookshelf",
      "tags": []
    },
    {
      "name": "Chiseled Deepslate",
      "tags": []
    },
    {
      "name": "Chiseled Quartz Block",
      "tags": []
    },
    {
      "name": "Chiseled Resin Bricks",
      "tags": []
    },
    {
      "name": "Chiseled Stone Bricks",
      "tags": []
    },
    {
      "name": "Chiseled Tuff",
      "tags": []
    },
    {
      "name": "Chiseled Tuff Bricks",
      "tags": []
    },
    {
      "name": "Clay",
      "tags": []
    },
    {
      "name": "Closed Eyeblossom",
      "tags": []
    },
    {
      "name": "Coal Block",
      "tags": []
    },
    {
      "name": "Cobbled Deepslate",
      "tags": []
    },
    {
      "name": "Cobbled Deepslate Slab",
      "tags": []
    },
    {
      "name": "Cobbled Deepslate Stairs",
      "tags": []
    },
    {
      "name": "Cobbled Deepslate Wall",
      "tags": []
    },
    {
      "name": "Cobblestone",
      "tags": []
    },
    {
      "name": "Cobblestone Slab",
      "tags": []
    },
    {
      "name": "Cobblestone Stairs",
      "tags": []
    },
    {
      "name": "Cobblestone Wall",
      "tags": []
    },
    {
      "name": "Cobweb",
      "tags": []
    },
    {
      "name": "Cocoa",
      "tags": []
    },
    {
      "name": "Composter",
      "tags": []
    },
    {
      "name": "Cracked Deepslate Bricks",
      "tags": []
    },
    {
      "name": "Cracked Deepslate Tiles",
      "tags": []
    },
    {
      "name": "Cracked Stone Bricks",
      "tags": []
    },
    {
      "name": "Crafter",
      "tags": []
    },
    {
      "name": "Crafting Table",
      "tags": []
    },
    {
      "name": "Creaking Heart",
      "tags": []
    },
    {
      "name": "Creeper Head",
      "tags": []
    },
    {
      "name": "Creeper Wall Head",
      "tags": []
    },
    {
      "name": "Crying Obsidian",
      "tags": []
    },
    {
      "name": "Dandelion",
      "tags": []
    },
    {
      "name": "Dark Prismarine",
      "tags": []
    },
    {
      "name": "Dark Prismarine Slab",
      "tags": []
    },
    {
      "name": "Dark Prismarine Stairs",
      "tags": []
    },
    {
      "name": "Deepslate",
      "tags": []
    },
    {
      "name": "Deepslate Brick Slab",
      "tags": []
    },
    {
      "name": "Deepslate Brick Stairs",
      "tags": []
    },
    {
      "name": "Deepslate Brick Wall",
      "tags": []
    },
    {
      "name": "Deepslate Bricks",
      "tags": []
    },
    {
      "name": "Deepslate Tile Slab",
      "tags": []
    },
    {
      "name": "Deepslate Tile Stairs",
      "tags": []
    },
    {
      "name": "Deepslate Tile Wall",
      "tags": []
    },
    {
      "name": "Deepslate Tiles",
      "tags": []
    },
    {
      "name": "Diorite",
      "tags": []
    },
    {
      "name": "Diorite Slab",
      "tags": []
    },
    {
      "name": "Diorite Stairs",
      "tags": []
    },
    {
      "name": "Diorite Wall",
      "tags": []
    },
    {
      "name": "Dripstone Block",
      "tags": []
    },
    {
      "name": "Exposed Lightning Rod",
      "tags": []
    },
    {
      "name": "Farmland",
      "tags": []
    },
    {
      "name": "Fire",
      "tags": []
    },
    {
      "name": "Fletching Table",
      "tags": []
    },
    {
      "name": "Frogspawn",
      "tags": []
    },
    {
      "name": "Furnace",
      "tags": []
    },
    {
      "name": "Glow Lichen",
      "tags": []
    },
    {
      "name": "Golden Dandelion",
      "tags": []
    },
    {
      "name": "Granite",
      "tags": []
    },
    {
      "name": "Granite Slab",
      "tags": []
    },
    {
      "name": "Granite Stairs",
      "tags": []
    },
    {
      "name": "Granite Wall",
      "tags": []
    },
    {
      "name": "Grindstone",
      "tags": []
    },
    {
      "name": "Hanging Roots",
      "tags": []
    },
    {
      "name": "Hay Block",
      "tags": []
    },
    {
      "name": "Honey Block",
      "tags": []
    },
    {
      "name": "Honeycomb Block",
      "tags": []
    },
    {
      "name": "Infested Chiseled Stone Bricks",
      "tags": []
    },
    {
      "name": "Infested Cobblestone",
      "tags": []
    },
    {
      "name": "Infested Cracked Stone Bricks",
      "tags": []
    },
    {
      "name": "Infested Deepslate",
      "tags": []
    },
    {
      "name": "Infested Mossy Stone Bricks",
      "tags": []
    },
    {
      "name": "Infested Stone",
      "tags": []
    },
    {
      "name": "Infested Stone Bricks",
      "tags": []
    },
    {
      "name": "Iron Bars",
      "tags": []
    },
    {
      "name": "Iron Chain",
      "tags": []
    },
    {
      "name": "Jack O Lantern",
      "tags": []
    },
    {
      "name": "Jukebox",
      "tags": []
    },
    {
      "name": "Ladder",
      "tags": []
    },
    {
      "name": "Lantern",
      "tags": []
    },
    {
      "name": "Lava",
      "tags": []
    },
    {
      "name": "Lava Cauldron",
      "tags": []
    },
    {
      "name": "Leaf Litter",
      "tags": []
    },
    {
      "name": "Lectern",
      "tags": []
    },
    {
      "name": "Light",
      "tags": []
    },
    {
      "name": "Lightning Rod",
      "tags": []
    },
    {
      "name": "Lilac",
      "tags": []
    },
    {
      "name": "Loom",
      "tags": []
    },
    {
      "name": "Moss Block",
      "tags": []
    },
    {
      "name": "Mossy Cobblestone",
      "tags": []
    },
    {
      "name": "Mossy Cobblestone Slab",
      "tags": []
    },
    {
      "name": "Mossy Cobblestone Stairs",
      "tags": []
    },
    {
      "name": "Mossy Cobblestone Wall",
      "tags": []
    },
    {
      "name": "Mossy Stone Brick Slab",
      "tags": []
    },
    {
      "name": "Mossy Stone Brick Stairs",
      "tags": []
    },
    {
      "name": "Mossy Stone Brick Wall",
      "tags": []
    },
    {
      "name": "Mossy Stone Bricks",
      "tags": []
    },
    {
      "name": "Mud",
      "tags": []
    },
    {
      "name": "Mud Brick Slab",
      "tags": []
    },
    {
      "name": "Mud Brick Stairs",
      "tags": []
    },
    {
      "name": "Mud Brick Wall",
      "tags": []
    },
    {
      "name": "Mud Bricks",
      "tags": []
    },
    {
      "name": "Mycelium",
      "tags": []
    },
    {
      "name": "Note Block",
      "tags": []
    },
    {
      "name": "Obsidian",
      "tags": []
    },
    {
      "name": "Ochre Froglight",
      "tags": []
    },
    {
      "name": "Open Eyeblossom",
      "tags": []
    },
    {
      "name": "Oxeye Daisy",
      "tags": []
    },
    {
      "name": "Oxidized Lightning Rod",
      "tags": []
    },
    {
      "name": "Packed Mud",
      "tags": []
    },
    {
      "name": "Pale Hanging Moss",
      "tags": []
    },
    {
      "name": "Pale Moss Block",
      "tags": []
    },
    {
      "name": "Pearlescent Froglight",
      "tags": []
    },
    {
      "name": "Peony",
      "tags": []
    },
    {
      "name": "Piglin Head",
      "tags": []
    },
    {
      "name": "Piglin Wall Head",
      "tags": []
    },
    {
      "name": "Pink Petals",
      "tags": []
    },
    {
      "name": "Pitcher Crop",
      "tags": []
    },
    {
      "name": "Player Head",
      "tags": []
    },
    {
      "name": "Player Wall Head",
      "tags": []
    },
    {
      "name": "Podzol",
      "tags": []
    },
    {
      "name": "Pointed Dripstone",
      "tags": []
    },
    {
      "name": "Polished Andesite",
      "tags": []
    },
    {
      "name": "Polished Andesite Slab",
      "tags": []
    },
    {
      "name": "Polished Andesite Stairs",
      "tags": []
    },
    {
      "name": "Polished Deepslate",
      "tags": []
    },
    {
      "name": "Polished Deepslate Slab",
      "tags": []
    },
    {
      "name": "Polished Deepslate Stairs",
      "tags": []
    },
    {
      "name": "Polished Deepslate Wall",
      "tags": []
    },
    {
      "name": "Polished Diorite",
      "tags": []
    },
    {
      "name": "Polished Diorite Slab",
      "tags": []
    },
    {
      "name": "Polished Diorite Stairs",
      "tags": []
    },
    {
      "name": "Polished Granite",
      "tags": []
    },
    {
      "name": "Polished Granite Slab",
      "tags": []
    },
    {
      "name": "Polished Granite Stairs",
      "tags": []
    },
    {
      "name": "Polished Tuff",
      "tags": []
    },
    {
      "name": "Polished Tuff Slab",
      "tags": []
    },
    {
      "name": "Polished Tuff Stairs",
      "tags": []
    },
    {
      "name": "Polished Tuff Wall",
      "tags": []
    },
    {
      "name": "Poppy",
      "tags": []
    },
    {
      "name": "Prismarine",
      "tags": []
    },
    {
      "name": "Prismarine Brick Slab",
      "tags": []
    },
    {
      "name": "Prismarine Brick Stairs",
      "tags": []
    },
    {
      "name": "Prismarine Bricks",
      "tags": []
    },
    {
      "name": "Prismarine Slab",
      "tags": []
    },
    {
      "name": "Prismarine Stairs",
      "tags": []
    },
    {
      "name": "Prismarine Wall",
      "tags": []
    },
    {
      "name": "Quartz Block",
      "tags": []
    },
    {
      "name": "Quartz Bricks",
      "tags": []
    },
    {
      "name": "Quartz Pillar",
      "tags": []
    },
    {
      "name": "Quartz Slab",
      "tags": []
    },
    {
      "name": "Quartz Stairs",
      "tags": []
    },
    {
      "name": "Reinforced Deepslate",
      "tags": []
    },
    {
      "name": "Resin Block",
      "tags": []
    },
    {
      "name": "Resin Brick Slab",
      "tags": []
    },
    {
      "name": "Resin Brick Stairs",
      "tags": []
    },
    {
      "name": "Resin Brick Wall",
      "tags": []
    },
    {
      "name": "Resin Bricks",
      "tags": []
    },
    {
      "name": "Resin Clump",
      "tags": []
    },
    {
      "name": "Respawn Anchor",
      "tags": []
    },
    {
      "name": "Scaffolding",
      "tags": []
    },
    {
      "name": "Sea Lantern",
      "tags": []
    },
    {
      "name": "Sea Pickle",
      "tags": []
    },
    {
      "name": "Shroomlight",
      "tags": []
    },
    {
      "name": "Skeleton Skull",
      "tags": []
    },
    {
      "name": "Skeleton Wall Skull",
      "tags": []
    },
    {
      "name": "Slime Block",
      "tags": []
    },
    {
      "name": "Small Dripleaf",
      "tags": []
    },
    {
      "name": "Smithing Table",
      "tags": []
    },
    {
      "name": "Smoker",
      "tags": []
    },
    {
      "name": "Smooth Quartz",
      "tags": []
    },
    {
      "name": "Smooth Quartz Slab",
      "tags": []
    },
    {
      "name": "Smooth Quartz Stairs",
      "tags": []
    },
    {
      "name": "Smooth Stone",
      "tags": []
    },
    {
      "name": "Smooth Stone Slab",
      "tags": []
    },
    {
      "name": "Sniffer Egg",
      "tags": []
    },
    {
      "name": "Stone",
      "tags": []
    },
    {
      "name": "Stone Brick Slab",
      "tags": []
    },
    {
      "name": "Stone Brick Stairs",
      "tags": []
    },
    {
      "name": "Stone Brick Wall",
      "tags": []
    },
    {
      "name": "Stone Bricks",
      "tags": []
    },
    {
      "name": "Stone Slab",
      "tags": []
    },
    {
      "name": "Stone Stairs",
      "tags": []
    },
    {
      "name": "Stonecutter",
      "tags": []
    },
    {
      "name": "Sugar Cane",
      "tags": []
    },
    {
      "name": "Test Block",
      "tags": []
    },
    {
      "name": "Test Instance Block",
      "tags": []
    },
    {
      "name": "Tnt",
      "tags": []
    },
    {
      "name": "Torch",
      "tags": []
    },
    {
      "name": "Tuff",
      "tags": []
    },
    {
      "name": "Tuff Brick Slab",
      "tags": []
    },
    {
      "name": "Tuff Brick Stairs",
      "tags": []
    },
    {
      "name": "Tuff Brick Wall",
      "tags": []
    },
    {
      "name": "Tuff Bricks",
      "tags": []
    },
    {
      "name": "Tuff Slab",
      "tags": []
    },
    {
      "name": "Tuff Stairs",
      "tags": []
    },
    {
      "name": "Tuff Wall",
      "tags": []
    },
    {
      "name": "Turtle Egg",
      "tags": []
    },
    {
      "name": "Vault",
      "tags": []
    },
    {
      "name": "Verdant Froglight",
      "tags": []
    },
    {
      "name": "Void Air",
      "tags": []
    },
    {
      "name": "Wall Torch",
      "tags": []
    },
    {
      "name": "Water",
      "tags": []
    },
    {
      "name": "Water Cauldron",
      "tags": []
    },
    {
      "name": "Waxed Exposed Lightning Rod",
      "tags": []
    },
    {
      "name": "Waxed Lightning Rod",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Lightning Rod",
      "tags": []
    },
    {
      "name": "Waxed Weathered Lightning Rod",
      "tags": []
    },
    {
      "name": "Weathered Lightning Rod",
      "tags": []
    },
    {
      "name": "Wheat",
      "tags": []
    },
    {
      "name": "Wither Rose",
      "tags": []
    },
    {
      "name": "Wither Skeleton Skull",
      "tags": []
    },
    {
      "name": "Wither Skeleton Wall Skull",
      "tags": []
    },
    {
      "name": "Zombie Head",
      "tags": []
    },
    {
      "name": "Zombie Wall Head",
      "tags": []
    }
  ],
  "madera": [
    {
      "name": "Acacia Door",
      "tags": []
    },
    {
      "name": "Acacia Fence",
      "tags": []
    },
    {
      "name": "Acacia Fence Gate",
      "tags": []
    },
    {
      "name": "Acacia Hanging Sign",
      "tags": []
    },
    {
      "name": "Acacia Leaves",
      "tags": []
    },
    {
      "name": "Acacia Log",
      "tags": []
    },
    {
      "name": "Acacia Planks",
      "tags": []
    },
    {
      "name": "Acacia Sapling",
      "tags": []
    },
    {
      "name": "Acacia Shelf",
      "tags": []
    },
    {
      "name": "Acacia Sign",
      "tags": []
    },
    {
      "name": "Acacia Slab",
      "tags": []
    },
    {
      "name": "Acacia Stairs",
      "tags": []
    },
    {
      "name": "Acacia Trapdoor",
      "tags": []
    },
    {
      "name": "Acacia Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Acacia Wall Sign",
      "tags": []
    },
    {
      "name": "Acacia Wood",
      "tags": []
    },
    {
      "name": "Bamboo",
      "tags": []
    },
    {
      "name": "Bamboo Block",
      "tags": []
    },
    {
      "name": "Bamboo Door",
      "tags": []
    },
    {
      "name": "Bamboo Fence",
      "tags": []
    },
    {
      "name": "Bamboo Fence Gate",
      "tags": []
    },
    {
      "name": "Bamboo Hanging Sign",
      "tags": []
    },
    {
      "name": "Bamboo Mosaic",
      "tags": []
    },
    {
      "name": "Bamboo Mosaic Slab",
      "tags": []
    },
    {
      "name": "Bamboo Mosaic Stairs",
      "tags": []
    },
    {
      "name": "Bamboo Planks",
      "tags": []
    },
    {
      "name": "Bamboo Sapling",
      "tags": []
    },
    {
      "name": "Bamboo Shelf",
      "tags": []
    },
    {
      "name": "Bamboo Sign",
      "tags": []
    },
    {
      "name": "Bamboo Slab",
      "tags": []
    },
    {
      "name": "Bamboo Stairs",
      "tags": []
    },
    {
      "name": "Bamboo Trapdoor",
      "tags": []
    },
    {
      "name": "Bamboo Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Bamboo Wall Sign",
      "tags": []
    },
    {
      "name": "Birch Door",
      "tags": []
    },
    {
      "name": "Birch Fence",
      "tags": []
    },
    {
      "name": "Birch Fence Gate",
      "tags": []
    },
    {
      "name": "Birch Hanging Sign",
      "tags": []
    },
    {
      "name": "Birch Leaves",
      "tags": []
    },
    {
      "name": "Birch Log",
      "tags": []
    },
    {
      "name": "Birch Planks",
      "tags": []
    },
    {
      "name": "Birch Sapling",
      "tags": []
    },
    {
      "name": "Birch Shelf",
      "tags": []
    },
    {
      "name": "Birch Sign",
      "tags": []
    },
    {
      "name": "Birch Slab",
      "tags": []
    },
    {
      "name": "Birch Stairs",
      "tags": []
    },
    {
      "name": "Birch Trapdoor",
      "tags": []
    },
    {
      "name": "Birch Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Birch Wall Sign",
      "tags": []
    },
    {
      "name": "Birch Wood",
      "tags": []
    },
    {
      "name": "Cherry Door",
      "tags": []
    },
    {
      "name": "Cherry Fence",
      "tags": []
    },
    {
      "name": "Cherry Fence Gate",
      "tags": []
    },
    {
      "name": "Cherry Hanging Sign",
      "tags": []
    },
    {
      "name": "Cherry Leaves",
      "tags": []
    },
    {
      "name": "Cherry Log",
      "tags": []
    },
    {
      "name": "Cherry Planks",
      "tags": []
    },
    {
      "name": "Cherry Sapling",
      "tags": []
    },
    {
      "name": "Cherry Shelf",
      "tags": []
    },
    {
      "name": "Cherry Sign",
      "tags": []
    },
    {
      "name": "Cherry Slab",
      "tags": []
    },
    {
      "name": "Cherry Stairs",
      "tags": []
    },
    {
      "name": "Cherry Trapdoor",
      "tags": []
    },
    {
      "name": "Cherry Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Cherry Wall Sign",
      "tags": []
    },
    {
      "name": "Cherry Wood",
      "tags": []
    },
    {
      "name": "Dark Oak Door",
      "tags": []
    },
    {
      "name": "Dark Oak Fence",
      "tags": []
    },
    {
      "name": "Dark Oak Fence Gate",
      "tags": []
    },
    {
      "name": "Dark Oak Hanging Sign",
      "tags": []
    },
    {
      "name": "Dark Oak Leaves",
      "tags": []
    },
    {
      "name": "Dark Oak Log",
      "tags": []
    },
    {
      "name": "Dark Oak Planks",
      "tags": []
    },
    {
      "name": "Dark Oak Sapling",
      "tags": []
    },
    {
      "name": "Dark Oak Shelf",
      "tags": []
    },
    {
      "name": "Dark Oak Sign",
      "tags": []
    },
    {
      "name": "Dark Oak Slab",
      "tags": []
    },
    {
      "name": "Dark Oak Stairs",
      "tags": []
    },
    {
      "name": "Dark Oak Trapdoor",
      "tags": []
    },
    {
      "name": "Dark Oak Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Dark Oak Wall Sign",
      "tags": []
    },
    {
      "name": "Dark Oak Wood",
      "tags": []
    },
    {
      "name": "Jungle Door",
      "tags": []
    },
    {
      "name": "Jungle Fence",
      "tags": []
    },
    {
      "name": "Jungle Fence Gate",
      "tags": []
    },
    {
      "name": "Jungle Hanging Sign",
      "tags": []
    },
    {
      "name": "Jungle Leaves",
      "tags": []
    },
    {
      "name": "Jungle Log",
      "tags": []
    },
    {
      "name": "Jungle Planks",
      "tags": []
    },
    {
      "name": "Jungle Sapling",
      "tags": []
    },
    {
      "name": "Jungle Shelf",
      "tags": []
    },
    {
      "name": "Jungle Sign",
      "tags": []
    },
    {
      "name": "Jungle Slab",
      "tags": []
    },
    {
      "name": "Jungle Stairs",
      "tags": []
    },
    {
      "name": "Jungle Trapdoor",
      "tags": []
    },
    {
      "name": "Jungle Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Jungle Wall Sign",
      "tags": []
    },
    {
      "name": "Jungle Wood",
      "tags": []
    },
    {
      "name": "Mangrove Door",
      "tags": []
    },
    {
      "name": "Mangrove Fence",
      "tags": []
    },
    {
      "name": "Mangrove Fence Gate",
      "tags": []
    },
    {
      "name": "Mangrove Hanging Sign",
      "tags": []
    },
    {
      "name": "Mangrove Leaves",
      "tags": []
    },
    {
      "name": "Mangrove Log",
      "tags": []
    },
    {
      "name": "Mangrove Planks",
      "tags": []
    },
    {
      "name": "Mangrove Propagule",
      "tags": []
    },
    {
      "name": "Mangrove Roots",
      "tags": []
    },
    {
      "name": "Mangrove Shelf",
      "tags": []
    },
    {
      "name": "Mangrove Sign",
      "tags": []
    },
    {
      "name": "Mangrove Slab",
      "tags": []
    },
    {
      "name": "Mangrove Stairs",
      "tags": []
    },
    {
      "name": "Mangrove Trapdoor",
      "tags": []
    },
    {
      "name": "Mangrove Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Mangrove Wall Sign",
      "tags": []
    },
    {
      "name": "Mangrove Wood",
      "tags": []
    },
    {
      "name": "Muddy Mangrove Roots",
      "tags": []
    },
    {
      "name": "Oak Door",
      "tags": []
    },
    {
      "name": "Oak Fence",
      "tags": []
    },
    {
      "name": "Oak Fence Gate",
      "tags": []
    },
    {
      "name": "Oak Hanging Sign",
      "tags": []
    },
    {
      "name": "Oak Leaves",
      "tags": []
    },
    {
      "name": "Oak Log",
      "tags": []
    },
    {
      "name": "Oak Planks",
      "tags": []
    },
    {
      "name": "Oak Sapling",
      "tags": []
    },
    {
      "name": "Oak Shelf",
      "tags": []
    },
    {
      "name": "Oak Sign",
      "tags": []
    },
    {
      "name": "Oak Slab",
      "tags": []
    },
    {
      "name": "Oak Stairs",
      "tags": []
    },
    {
      "name": "Oak Trapdoor",
      "tags": []
    },
    {
      "name": "Oak Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Oak Wall Sign",
      "tags": []
    },
    {
      "name": "Oak Wood",
      "tags": []
    },
    {
      "name": "Pale Oak Door",
      "tags": []
    },
    {
      "name": "Pale Oak Fence",
      "tags": []
    },
    {
      "name": "Pale Oak Fence Gate",
      "tags": []
    },
    {
      "name": "Pale Oak Hanging Sign",
      "tags": []
    },
    {
      "name": "Pale Oak Leaves",
      "tags": []
    },
    {
      "name": "Pale Oak Log",
      "tags": []
    },
    {
      "name": "Pale Oak Planks",
      "tags": []
    },
    {
      "name": "Pale Oak Sapling",
      "tags": []
    },
    {
      "name": "Pale Oak Shelf",
      "tags": []
    },
    {
      "name": "Pale Oak Sign",
      "tags": []
    },
    {
      "name": "Pale Oak Slab",
      "tags": []
    },
    {
      "name": "Pale Oak Stairs",
      "tags": []
    },
    {
      "name": "Pale Oak Trapdoor",
      "tags": []
    },
    {
      "name": "Pale Oak Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Pale Oak Wall Sign",
      "tags": []
    },
    {
      "name": "Pale Oak Wood",
      "tags": []
    },
    {
      "name": "Petrified Oak Slab",
      "tags": []
    },
    {
      "name": "Potted Acacia Sapling",
      "tags": []
    },
    {
      "name": "Potted Bamboo",
      "tags": []
    },
    {
      "name": "Potted Birch Sapling",
      "tags": []
    },
    {
      "name": "Potted Cherry Sapling",
      "tags": []
    },
    {
      "name": "Potted Dark Oak Sapling",
      "tags": []
    },
    {
      "name": "Potted Jungle Sapling",
      "tags": []
    },
    {
      "name": "Potted Mangrove Propagule",
      "tags": []
    },
    {
      "name": "Potted Oak Sapling",
      "tags": []
    },
    {
      "name": "Potted Pale Oak Sapling",
      "tags": []
    },
    {
      "name": "Potted Spruce Sapling",
      "tags": []
    },
    {
      "name": "Spruce Door",
      "tags": []
    },
    {
      "name": "Spruce Fence",
      "tags": []
    },
    {
      "name": "Spruce Fence Gate",
      "tags": []
    },
    {
      "name": "Spruce Hanging Sign",
      "tags": []
    },
    {
      "name": "Spruce Leaves",
      "tags": []
    },
    {
      "name": "Spruce Log",
      "tags": []
    },
    {
      "name": "Spruce Planks",
      "tags": []
    },
    {
      "name": "Spruce Sapling",
      "tags": []
    },
    {
      "name": "Spruce Shelf",
      "tags": []
    },
    {
      "name": "Spruce Sign",
      "tags": []
    },
    {
      "name": "Spruce Slab",
      "tags": []
    },
    {
      "name": "Spruce Stairs",
      "tags": []
    },
    {
      "name": "Spruce Trapdoor",
      "tags": []
    },
    {
      "name": "Spruce Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Spruce Wall Sign",
      "tags": []
    },
    {
      "name": "Spruce Wood",
      "tags": []
    },
    {
      "name": "Stripped Acacia Log",
      "tags": []
    },
    {
      "name": "Stripped Acacia Wood",
      "tags": []
    },
    {
      "name": "Stripped Bamboo Block",
      "tags": []
    },
    {
      "name": "Stripped Birch Log",
      "tags": []
    },
    {
      "name": "Stripped Birch Wood",
      "tags": []
    },
    {
      "name": "Stripped Cherry Log",
      "tags": []
    },
    {
      "name": "Stripped Cherry Wood",
      "tags": []
    },
    {
      "name": "Stripped Dark Oak Log",
      "tags": []
    },
    {
      "name": "Stripped Dark Oak Wood",
      "tags": []
    },
    {
      "name": "Stripped Jungle Log",
      "tags": []
    },
    {
      "name": "Stripped Jungle Wood",
      "tags": []
    },
    {
      "name": "Stripped Mangrove Log",
      "tags": []
    },
    {
      "name": "Stripped Mangrove Wood",
      "tags": []
    },
    {
      "name": "Stripped Oak Log",
      "tags": []
    },
    {
      "name": "Stripped Oak Wood",
      "tags": []
    },
    {
      "name": "Stripped Pale Oak Log",
      "tags": []
    },
    {
      "name": "Stripped Pale Oak Wood",
      "tags": []
    },
    {
      "name": "Stripped Spruce Log",
      "tags": []
    },
    {
      "name": "Stripped Spruce Wood",
      "tags": []
    }
  ],
  "naturaleza": [
    {
      "name": "Allium",
      "tags": []
    },
    {
      "name": "Attached Melon Stem",
      "tags": []
    },
    {
      "name": "Attached Pumpkin Stem",
      "tags": []
    },
    {
      "name": "Azalea Leaves",
      "tags": []
    },
    {
      "name": "Blue Ice",
      "tags": []
    },
    {
      "name": "Brain Coral",
      "tags": []
    },
    {
      "name": "Brain Coral Block",
      "tags": []
    },
    {
      "name": "Brain Coral Fan",
      "tags": []
    },
    {
      "name": "Brain Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Brown Mushroom",
      "tags": []
    },
    {
      "name": "Brown Mushroom Block",
      "tags": []
    },
    {
      "name": "Bubble Coral",
      "tags": []
    },
    {
      "name": "Bubble Coral Block",
      "tags": []
    },
    {
      "name": "Bubble Coral Fan",
      "tags": []
    },
    {
      "name": "Bubble Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Bush",
      "tags": []
    },
    {
      "name": "Cactus Flower",
      "tags": []
    },
    {
      "name": "Carved Pumpkin",
      "tags": []
    },
    {
      "name": "Cave Vines",
      "tags": []
    },
    {
      "name": "Cave Vines Plant",
      "tags": []
    },
    {
      "name": "Chiseled Red Sandstone",
      "tags": []
    },
    {
      "name": "Chiseled Sandstone",
      "tags": []
    },
    {
      "name": "Coarse Dirt",
      "tags": []
    },
    {
      "name": "Cornflower",
      "tags": []
    },
    {
      "name": "Cut Red Sandstone",
      "tags": []
    },
    {
      "name": "Cut Red Sandstone Slab",
      "tags": []
    },
    {
      "name": "Cut Sandstone",
      "tags": []
    },
    {
      "name": "Cut Sandstone Slab",
      "tags": []
    },
    {
      "name": "Dead Brain Coral",
      "tags": []
    },
    {
      "name": "Dead Brain Coral Block",
      "tags": []
    },
    {
      "name": "Dead Brain Coral Fan",
      "tags": []
    },
    {
      "name": "Dead Brain Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Dead Bubble Coral",
      "tags": []
    },
    {
      "name": "Dead Bubble Coral Block",
      "tags": []
    },
    {
      "name": "Dead Bubble Coral Fan",
      "tags": []
    },
    {
      "name": "Dead Bubble Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Dead Bush",
      "tags": []
    },
    {
      "name": "Dead Fire Coral",
      "tags": []
    },
    {
      "name": "Dead Fire Coral Block",
      "tags": []
    },
    {
      "name": "Dead Fire Coral Fan",
      "tags": []
    },
    {
      "name": "Dead Fire Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Dead Horn Coral",
      "tags": []
    },
    {
      "name": "Dead Horn Coral Block",
      "tags": []
    },
    {
      "name": "Dead Horn Coral Fan",
      "tags": []
    },
    {
      "name": "Dead Horn Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Dead Tube Coral",
      "tags": []
    },
    {
      "name": "Dead Tube Coral Block",
      "tags": []
    },
    {
      "name": "Dead Tube Coral Fan",
      "tags": []
    },
    {
      "name": "Dead Tube Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Dirt",
      "tags": []
    },
    {
      "name": "Dirt Path",
      "tags": []
    },
    {
      "name": "Dried Kelp Block",
      "tags": []
    },
    {
      "name": "Fern",
      "tags": []
    },
    {
      "name": "Fire Coral",
      "tags": []
    },
    {
      "name": "Fire Coral Block",
      "tags": []
    },
    {
      "name": "Fire Coral Fan",
      "tags": []
    },
    {
      "name": "Fire Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Firefly Bush",
      "tags": []
    },
    {
      "name": "Flower Pot",
      "tags": []
    },
    {
      "name": "Flowering Azalea",
      "tags": []
    },
    {
      "name": "Flowering Azalea Leaves",
      "tags": []
    },
    {
      "name": "Frosted Ice",
      "tags": []
    },
    {
      "name": "Grass Block",
      "tags": []
    },
    {
      "name": "Gravel",
      "tags": []
    },
    {
      "name": "Horn Coral",
      "tags": []
    },
    {
      "name": "Horn Coral Block",
      "tags": []
    },
    {
      "name": "Horn Coral Fan",
      "tags": []
    },
    {
      "name": "Horn Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Ice",
      "tags": []
    },
    {
      "name": "Kelp",
      "tags": []
    },
    {
      "name": "Kelp Plant",
      "tags": []
    },
    {
      "name": "Large Fern",
      "tags": []
    },
    {
      "name": "Lily of The Valley",
      "tags": []
    },
    {
      "name": "Lily Pad",
      "tags": []
    },
    {
      "name": "Melon",
      "tags": []
    },
    {
      "name": "Melon Stem",
      "tags": []
    },
    {
      "name": "Mushroom Stem",
      "tags": []
    },
    {
      "name": "Orange Tulip",
      "tags": []
    },
    {
      "name": "Packed Ice",
      "tags": []
    },
    {
      "name": "Pink Tulip",
      "tags": []
    },
    {
      "name": "Pitcher Plant",
      "tags": []
    },
    {
      "name": "Potted Allium",
      "tags": []
    },
    {
      "name": "Potted Azalea Bush",
      "tags": []
    },
    {
      "name": "Potted Brown Mushroom",
      "tags": []
    },
    {
      "name": "Potted Cornflower",
      "tags": []
    },
    {
      "name": "Potted Dead Bush",
      "tags": []
    },
    {
      "name": "Potted Fern",
      "tags": []
    },
    {
      "name": "Potted Flowering Azalea Bush",
      "tags": []
    },
    {
      "name": "Potted Lily of The Valley",
      "tags": []
    },
    {
      "name": "Potted Orange Tulip",
      "tags": []
    },
    {
      "name": "Potted Pink Tulip",
      "tags": []
    },
    {
      "name": "Potted Red Mushroom",
      "tags": []
    },
    {
      "name": "Potted Red Tulip",
      "tags": []
    },
    {
      "name": "Potted Torchflower",
      "tags": []
    },
    {
      "name": "Potted White Tulip",
      "tags": []
    },
    {
      "name": "Powder Snow",
      "tags": []
    },
    {
      "name": "Powder Snow Cauldron",
      "tags": []
    },
    {
      "name": "Pumpkin",
      "tags": []
    },
    {
      "name": "Pumpkin Stem",
      "tags": []
    },
    {
      "name": "Red Mushroom",
      "tags": []
    },
    {
      "name": "Red Mushroom Block",
      "tags": []
    },
    {
      "name": "Red Sand",
      "tags": []
    },
    {
      "name": "Red Sandstone",
      "tags": []
    },
    {
      "name": "Red Sandstone Slab",
      "tags": []
    },
    {
      "name": "Red Sandstone Stairs",
      "tags": []
    },
    {
      "name": "Red Sandstone Wall",
      "tags": []
    },
    {
      "name": "Red Tulip",
      "tags": []
    },
    {
      "name": "Rooted Dirt",
      "tags": []
    },
    {
      "name": "Rose Bush",
      "tags": []
    },
    {
      "name": "Sand",
      "tags": []
    },
    {
      "name": "Sandstone",
      "tags": []
    },
    {
      "name": "Sandstone Slab",
      "tags": []
    },
    {
      "name": "Sandstone Stairs",
      "tags": []
    },
    {
      "name": "Sandstone Wall",
      "tags": []
    },
    {
      "name": "Seagrass",
      "tags": []
    },
    {
      "name": "Short Dry Grass",
      "tags": []
    },
    {
      "name": "Short Grass",
      "tags": []
    },
    {
      "name": "Smooth Red Sandstone",
      "tags": []
    },
    {
      "name": "Smooth Red Sandstone Slab",
      "tags": []
    },
    {
      "name": "Smooth Red Sandstone Stairs",
      "tags": []
    },
    {
      "name": "Smooth Sandstone",
      "tags": []
    },
    {
      "name": "Smooth Sandstone Slab",
      "tags": []
    },
    {
      "name": "Smooth Sandstone Stairs",
      "tags": []
    },
    {
      "name": "Snow",
      "tags": []
    },
    {
      "name": "Snow Block",
      "tags": []
    },
    {
      "name": "Sponge",
      "tags": []
    },
    {
      "name": "Sunflower",
      "tags": []
    },
    {
      "name": "Suspicious Gravel",
      "tags": []
    },
    {
      "name": "Suspicious Sand",
      "tags": []
    },
    {
      "name": "Sweet Berry Bush",
      "tags": []
    },
    {
      "name": "Tall Dry Grass",
      "tags": []
    },
    {
      "name": "Tall Grass",
      "tags": []
    },
    {
      "name": "Tall Seagrass",
      "tags": []
    },
    {
      "name": "Torchflower",
      "tags": []
    },
    {
      "name": "Torchflower Crop",
      "tags": []
    },
    {
      "name": "Tube Coral",
      "tags": []
    },
    {
      "name": "Tube Coral Block",
      "tags": []
    },
    {
      "name": "Tube Coral Fan",
      "tags": []
    },
    {
      "name": "Tube Coral Wall Fan",
      "tags": []
    },
    {
      "name": "Twisting Vines",
      "tags": []
    },
    {
      "name": "Twisting Vines Plant",
      "tags": []
    },
    {
      "name": "Vine",
      "tags": []
    },
    {
      "name": "Weeping Vines",
      "tags": []
    },
    {
      "name": "Weeping Vines Plant",
      "tags": []
    },
    {
      "name": "Wet Sponge",
      "tags": []
    },
    {
      "name": "White Tulip",
      "tags": []
    },
    {
      "name": "Wildflowers",
      "tags": []
    }
  ],
  "ores": [
    {
      "name": "Amethyst Block",
      "tags": []
    },
    {
      "name": "Amethyst Cluster",
      "tags": []
    },
    {
      "name": "Budding Amethyst",
      "tags": []
    },
    {
      "name": "Chiseled Copper",
      "tags": []
    },
    {
      "name": "Coal Ore",
      "tags": []
    },
    {
      "name": "Copper Bars",
      "tags": []
    },
    {
      "name": "Copper Block",
      "tags": []
    },
    {
      "name": "Copper Bulb",
      "tags": []
    },
    {
      "name": "Copper Chain",
      "tags": []
    },
    {
      "name": "Copper Chest",
      "tags": []
    },
    {
      "name": "Copper Door",
      "tags": []
    },
    {
      "name": "Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Copper Grate",
      "tags": []
    },
    {
      "name": "Copper Lantern",
      "tags": []
    },
    {
      "name": "Copper Ore",
      "tags": []
    },
    {
      "name": "Copper Torch",
      "tags": []
    },
    {
      "name": "Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Copper Wall Torch",
      "tags": []
    },
    {
      "name": "Cut Copper",
      "tags": []
    },
    {
      "name": "Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Deepslate Coal Ore",
      "tags": []
    },
    {
      "name": "Deepslate Copper Ore",
      "tags": []
    },
    {
      "name": "Deepslate Diamond Ore",
      "tags": []
    },
    {
      "name": "Deepslate Emerald Ore",
      "tags": []
    },
    {
      "name": "Deepslate Gold Ore",
      "tags": []
    },
    {
      "name": "Deepslate Iron Ore",
      "tags": []
    },
    {
      "name": "Deepslate Lapis Ore",
      "tags": []
    },
    {
      "name": "Diamond Block",
      "tags": []
    },
    {
      "name": "Diamond Ore",
      "tags": []
    },
    {
      "name": "Emerald Block",
      "tags": []
    },
    {
      "name": "Emerald Ore",
      "tags": []
    },
    {
      "name": "Exposed Chiseled Copper",
      "tags": []
    },
    {
      "name": "Exposed Copper",
      "tags": []
    },
    {
      "name": "Exposed Copper Bars",
      "tags": []
    },
    {
      "name": "Exposed Copper Bulb",
      "tags": []
    },
    {
      "name": "Exposed Copper Chain",
      "tags": []
    },
    {
      "name": "Exposed Copper Chest",
      "tags": []
    },
    {
      "name": "Exposed Copper Door",
      "tags": []
    },
    {
      "name": "Exposed Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Exposed Copper Grate",
      "tags": []
    },
    {
      "name": "Exposed Copper Lantern",
      "tags": []
    },
    {
      "name": "Exposed Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Exposed Cut Copper",
      "tags": []
    },
    {
      "name": "Exposed Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Exposed Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Gold Block",
      "tags": []
    },
    {
      "name": "Gold Ore",
      "tags": []
    },
    {
      "name": "Heavy Core",
      "tags": []
    },
    {
      "name": "Iron Block",
      "tags": []
    },
    {
      "name": "Iron Ore",
      "tags": []
    },
    {
      "name": "Lapis Block",
      "tags": []
    },
    {
      "name": "Lapis Ore",
      "tags": []
    },
    {
      "name": "Large Amethyst Bud",
      "tags": []
    },
    {
      "name": "Medium Amethyst Bud",
      "tags": []
    },
    {
      "name": "Oxidized Chiseled Copper",
      "tags": []
    },
    {
      "name": "Oxidized Copper",
      "tags": []
    },
    {
      "name": "Oxidized Copper Bars",
      "tags": []
    },
    {
      "name": "Oxidized Copper Bulb",
      "tags": []
    },
    {
      "name": "Oxidized Copper Chain",
      "tags": []
    },
    {
      "name": "Oxidized Copper Chest",
      "tags": []
    },
    {
      "name": "Oxidized Copper Door",
      "tags": []
    },
    {
      "name": "Oxidized Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Oxidized Copper Grate",
      "tags": []
    },
    {
      "name": "Oxidized Copper Lantern",
      "tags": []
    },
    {
      "name": "Oxidized Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Oxidized Cut Copper",
      "tags": []
    },
    {
      "name": "Oxidized Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Oxidized Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Raw Copper Block",
      "tags": []
    },
    {
      "name": "Raw Gold Block",
      "tags": []
    },
    {
      "name": "Raw Iron Block",
      "tags": []
    },
    {
      "name": "Small Amethyst Bud",
      "tags": []
    },
    {
      "name": "Spore Blossom",
      "tags": []
    },
    {
      "name": "Waxed Chiseled Copper",
      "tags": []
    },
    {
      "name": "Waxed Copper Bars",
      "tags": []
    },
    {
      "name": "Waxed Copper Block",
      "tags": []
    },
    {
      "name": "Waxed Copper Bulb",
      "tags": []
    },
    {
      "name": "Waxed Copper Chain",
      "tags": []
    },
    {
      "name": "Waxed Copper Chest",
      "tags": []
    },
    {
      "name": "Waxed Copper Door",
      "tags": []
    },
    {
      "name": "Waxed Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Waxed Copper Grate",
      "tags": []
    },
    {
      "name": "Waxed Copper Lantern",
      "tags": []
    },
    {
      "name": "Waxed Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Waxed Cut Copper",
      "tags": []
    },
    {
      "name": "Waxed Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Waxed Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Waxed Exposed Chiseled Copper",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Bars",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Bulb",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Chain",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Chest",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Door",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Grate",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Lantern",
      "tags": []
    },
    {
      "name": "Waxed Exposed Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Waxed Exposed Cut Copper",
      "tags": []
    },
    {
      "name": "Waxed Exposed Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Waxed Exposed Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Chiseled Copper",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Bars",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Bulb",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Chain",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Chest",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Door",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Grate",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Lantern",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Cut Copper",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Waxed Oxidized Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Waxed Weathered Chiseled Copper",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Bars",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Bulb",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Chain",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Chest",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Door",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Grate",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Lantern",
      "tags": []
    },
    {
      "name": "Waxed Weathered Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Waxed Weathered Cut Copper",
      "tags": []
    },
    {
      "name": "Waxed Weathered Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Waxed Weathered Cut Copper Stairs",
      "tags": []
    },
    {
      "name": "Weathered Chiseled Copper",
      "tags": []
    },
    {
      "name": "Weathered Copper",
      "tags": []
    },
    {
      "name": "Weathered Copper Bars",
      "tags": []
    },
    {
      "name": "Weathered Copper Bulb",
      "tags": []
    },
    {
      "name": "Weathered Copper Chain",
      "tags": []
    },
    {
      "name": "Weathered Copper Chest",
      "tags": []
    },
    {
      "name": "Weathered Copper Door",
      "tags": []
    },
    {
      "name": "Weathered Copper Golem Statue",
      "tags": []
    },
    {
      "name": "Weathered Copper Grate",
      "tags": []
    },
    {
      "name": "Weathered Copper Lantern",
      "tags": []
    },
    {
      "name": "Weathered Copper Trapdoor",
      "tags": []
    },
    {
      "name": "Weathered Cut Copper",
      "tags": []
    },
    {
      "name": "Weathered Cut Copper Slab",
      "tags": []
    },
    {
      "name": "Weathered Cut Copper Stairs",
      "tags": []
    }
  ],
  "decoracion": [
    {
      "name": "Barrel",
      "tags": []
    },
    {
      "name": "Bedrock",
      "tags": []
    },
    {
      "name": "Black Banner",
      "tags": []
    },
    {
      "name": "Black Bed",
      "tags": []
    },
    {
      "name": "Black Candle",
      "tags": []
    },
    {
      "name": "Black Candle Cake",
      "tags": []
    },
    {
      "name": "Black Carpet",
      "tags": []
    },
    {
      "name": "Black Concrete",
      "tags": []
    },
    {
      "name": "Black Concrete Powder",
      "tags": []
    },
    {
      "name": "Black Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Black Shulker Box",
      "tags": []
    },
    {
      "name": "Black Stained Glass",
      "tags": []
    },
    {
      "name": "Black Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Black Terracotta",
      "tags": []
    },
    {
      "name": "Black Wall Banner",
      "tags": []
    },
    {
      "name": "Black Wool",
      "tags": []
    },
    {
      "name": "Blue Banner",
      "tags": []
    },
    {
      "name": "Blue Bed",
      "tags": []
    },
    {
      "name": "Blue Candle",
      "tags": []
    },
    {
      "name": "Blue Candle Cake",
      "tags": []
    },
    {
      "name": "Blue Carpet",
      "tags": []
    },
    {
      "name": "Blue Concrete",
      "tags": []
    },
    {
      "name": "Blue Concrete Powder",
      "tags": []
    },
    {
      "name": "Blue Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Blue Shulker Box",
      "tags": []
    },
    {
      "name": "Blue Stained Glass",
      "tags": []
    },
    {
      "name": "Blue Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Blue Terracotta",
      "tags": []
    },
    {
      "name": "Blue Wall Banner",
      "tags": []
    },
    {
      "name": "Blue Wool",
      "tags": []
    },
    {
      "name": "Brown Banner",
      "tags": []
    },
    {
      "name": "Brown Bed",
      "tags": []
    },
    {
      "name": "Brown Candle",
      "tags": []
    },
    {
      "name": "Brown Candle Cake",
      "tags": []
    },
    {
      "name": "Brown Carpet",
      "tags": []
    },
    {
      "name": "Brown Concrete",
      "tags": []
    },
    {
      "name": "Brown Concrete Powder",
      "tags": []
    },
    {
      "name": "Brown Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Brown Shulker Box",
      "tags": []
    },
    {
      "name": "Brown Stained Glass",
      "tags": []
    },
    {
      "name": "Brown Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Brown Terracotta",
      "tags": []
    },
    {
      "name": "Brown Wall Banner",
      "tags": []
    },
    {
      "name": "Brown Wool",
      "tags": []
    },
    {
      "name": "Candle",
      "tags": []
    },
    {
      "name": "Candle Cake",
      "tags": []
    },
    {
      "name": "Chest",
      "tags": []
    },
    {
      "name": "Cyan Banner",
      "tags": []
    },
    {
      "name": "Cyan Bed",
      "tags": []
    },
    {
      "name": "Cyan Candle",
      "tags": []
    },
    {
      "name": "Cyan Candle Cake",
      "tags": []
    },
    {
      "name": "Cyan Carpet",
      "tags": []
    },
    {
      "name": "Cyan Concrete",
      "tags": []
    },
    {
      "name": "Cyan Concrete Powder",
      "tags": []
    },
    {
      "name": "Cyan Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Cyan Shulker Box",
      "tags": []
    },
    {
      "name": "Cyan Stained Glass",
      "tags": []
    },
    {
      "name": "Cyan Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Cyan Terracotta",
      "tags": []
    },
    {
      "name": "Cyan Wall Banner",
      "tags": []
    },
    {
      "name": "Cyan Wool",
      "tags": []
    },
    {
      "name": "Decorated Pot",
      "tags": []
    },
    {
      "name": "Glass",
      "tags": []
    },
    {
      "name": "Glass Pane",
      "tags": []
    },
    {
      "name": "Gray Banner",
      "tags": []
    },
    {
      "name": "Gray Bed",
      "tags": []
    },
    {
      "name": "Gray Candle",
      "tags": []
    },
    {
      "name": "Gray Candle Cake",
      "tags": []
    },
    {
      "name": "Gray Carpet",
      "tags": []
    },
    {
      "name": "Gray Concrete",
      "tags": []
    },
    {
      "name": "Gray Concrete Powder",
      "tags": []
    },
    {
      "name": "Gray Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Gray Shulker Box",
      "tags": []
    },
    {
      "name": "Gray Stained Glass",
      "tags": []
    },
    {
      "name": "Gray Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Gray Terracotta",
      "tags": []
    },
    {
      "name": "Gray Wall Banner",
      "tags": []
    },
    {
      "name": "Gray Wool",
      "tags": []
    },
    {
      "name": "Green Banner",
      "tags": []
    },
    {
      "name": "Green Bed",
      "tags": []
    },
    {
      "name": "Green Candle",
      "tags": []
    },
    {
      "name": "Green Candle Cake",
      "tags": []
    },
    {
      "name": "Green Carpet",
      "tags": []
    },
    {
      "name": "Green Concrete",
      "tags": []
    },
    {
      "name": "Green Concrete Powder",
      "tags": []
    },
    {
      "name": "Green Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Green Shulker Box",
      "tags": []
    },
    {
      "name": "Green Stained Glass",
      "tags": []
    },
    {
      "name": "Green Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Green Terracotta",
      "tags": []
    },
    {
      "name": "Green Wall Banner",
      "tags": []
    },
    {
      "name": "Green Wool",
      "tags": []
    },
    {
      "name": "Light Blue Banner",
      "tags": []
    },
    {
      "name": "Light Blue Bed",
      "tags": []
    },
    {
      "name": "Light Blue Candle",
      "tags": []
    },
    {
      "name": "Light Blue Candle Cake",
      "tags": []
    },
    {
      "name": "Light Blue Carpet",
      "tags": []
    },
    {
      "name": "Light Blue Concrete",
      "tags": []
    },
    {
      "name": "Light Blue Concrete Powder",
      "tags": []
    },
    {
      "name": "Light Blue Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Light Blue Shulker Box",
      "tags": []
    },
    {
      "name": "Light Blue Stained Glass",
      "tags": []
    },
    {
      "name": "Light Blue Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Light Blue Terracotta",
      "tags": []
    },
    {
      "name": "Light Blue Wall Banner",
      "tags": []
    },
    {
      "name": "Light Blue Wool",
      "tags": []
    },
    {
      "name": "Light Gray Banner",
      "tags": []
    },
    {
      "name": "Light Gray Bed",
      "tags": []
    },
    {
      "name": "Light Gray Candle",
      "tags": []
    },
    {
      "name": "Light Gray Candle Cake",
      "tags": []
    },
    {
      "name": "Light Gray Carpet",
      "tags": []
    },
    {
      "name": "Light Gray Concrete",
      "tags": []
    },
    {
      "name": "Light Gray Concrete Powder",
      "tags": []
    },
    {
      "name": "Light Gray Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Light Gray Shulker Box",
      "tags": []
    },
    {
      "name": "Light Gray Stained Glass",
      "tags": []
    },
    {
      "name": "Light Gray Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Light Gray Terracotta",
      "tags": []
    },
    {
      "name": "Light Gray Wall Banner",
      "tags": []
    },
    {
      "name": "Light Gray Wool",
      "tags": []
    },
    {
      "name": "Lime Banner",
      "tags": []
    },
    {
      "name": "Lime Bed",
      "tags": []
    },
    {
      "name": "Lime Candle",
      "tags": []
    },
    {
      "name": "Lime Candle Cake",
      "tags": []
    },
    {
      "name": "Lime Carpet",
      "tags": []
    },
    {
      "name": "Lime Concrete",
      "tags": []
    },
    {
      "name": "Lime Concrete Powder",
      "tags": []
    },
    {
      "name": "Lime Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Lime Shulker Box",
      "tags": []
    },
    {
      "name": "Lime Stained Glass",
      "tags": []
    },
    {
      "name": "Lime Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Lime Terracotta",
      "tags": []
    },
    {
      "name": "Lime Wall Banner",
      "tags": []
    },
    {
      "name": "Lime Wool",
      "tags": []
    },
    {
      "name": "Magenta Banner",
      "tags": []
    },
    {
      "name": "Magenta Bed",
      "tags": []
    },
    {
      "name": "Magenta Candle",
      "tags": []
    },
    {
      "name": "Magenta Candle Cake",
      "tags": []
    },
    {
      "name": "Magenta Carpet",
      "tags": []
    },
    {
      "name": "Magenta Concrete",
      "tags": []
    },
    {
      "name": "Magenta Concrete Powder",
      "tags": []
    },
    {
      "name": "Magenta Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Magenta Shulker Box",
      "tags": []
    },
    {
      "name": "Magenta Stained Glass",
      "tags": []
    },
    {
      "name": "Magenta Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Magenta Terracotta",
      "tags": []
    },
    {
      "name": "Magenta Wall Banner",
      "tags": []
    },
    {
      "name": "Magenta Wool",
      "tags": []
    },
    {
      "name": "Moss Carpet",
      "tags": []
    },
    {
      "name": "Orange Banner",
      "tags": []
    },
    {
      "name": "Orange Bed",
      "tags": []
    },
    {
      "name": "Orange Candle",
      "tags": []
    },
    {
      "name": "Orange Candle Cake",
      "tags": []
    },
    {
      "name": "Orange Carpet",
      "tags": []
    },
    {
      "name": "Orange Concrete",
      "tags": []
    },
    {
      "name": "Orange Concrete Powder",
      "tags": []
    },
    {
      "name": "Orange Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Orange Shulker Box",
      "tags": []
    },
    {
      "name": "Orange Stained Glass",
      "tags": []
    },
    {
      "name": "Orange Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Orange Terracotta",
      "tags": []
    },
    {
      "name": "Orange Wall Banner",
      "tags": []
    },
    {
      "name": "Orange Wool",
      "tags": []
    },
    {
      "name": "Pale Moss Carpet",
      "tags": []
    },
    {
      "name": "Pink Banner",
      "tags": []
    },
    {
      "name": "Pink Bed",
      "tags": []
    },
    {
      "name": "Pink Candle",
      "tags": []
    },
    {
      "name": "Pink Candle Cake",
      "tags": []
    },
    {
      "name": "Pink Carpet",
      "tags": []
    },
    {
      "name": "Pink Concrete",
      "tags": []
    },
    {
      "name": "Pink Concrete Powder",
      "tags": []
    },
    {
      "name": "Pink Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Pink Shulker Box",
      "tags": []
    },
    {
      "name": "Pink Stained Glass",
      "tags": []
    },
    {
      "name": "Pink Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Pink Terracotta",
      "tags": []
    },
    {
      "name": "Pink Wall Banner",
      "tags": []
    },
    {
      "name": "Pink Wool",
      "tags": []
    },
    {
      "name": "Potatoes",
      "tags": []
    },
    {
      "name": "Potted Azure Bluet",
      "tags": []
    },
    {
      "name": "Potted Blue Orchid",
      "tags": []
    },
    {
      "name": "Potted Cactus",
      "tags": []
    },
    {
      "name": "Potted Closed Eyeblossom",
      "tags": []
    },
    {
      "name": "Potted Dandelion",
      "tags": []
    },
    {
      "name": "Potted Golden Dandelion",
      "tags": []
    },
    {
      "name": "Potted Open Eyeblossom",
      "tags": []
    },
    {
      "name": "Potted Oxeye Daisy",
      "tags": []
    },
    {
      "name": "Potted Poppy",
      "tags": []
    },
    {
      "name": "Potted Wither Rose",
      "tags": []
    },
    {
      "name": "Purple Banner",
      "tags": []
    },
    {
      "name": "Purple Bed",
      "tags": []
    },
    {
      "name": "Purple Candle",
      "tags": []
    },
    {
      "name": "Purple Candle Cake",
      "tags": []
    },
    {
      "name": "Purple Carpet",
      "tags": []
    },
    {
      "name": "Purple Concrete",
      "tags": []
    },
    {
      "name": "Purple Concrete Powder",
      "tags": []
    },
    {
      "name": "Purple Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Purple Shulker Box",
      "tags": []
    },
    {
      "name": "Purple Stained Glass",
      "tags": []
    },
    {
      "name": "Purple Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Purple Terracotta",
      "tags": []
    },
    {
      "name": "Purple Wall Banner",
      "tags": []
    },
    {
      "name": "Purple Wool",
      "tags": []
    },
    {
      "name": "Red Banner",
      "tags": []
    },
    {
      "name": "Red Bed",
      "tags": []
    },
    {
      "name": "Red Candle",
      "tags": []
    },
    {
      "name": "Red Candle Cake",
      "tags": []
    },
    {
      "name": "Red Carpet",
      "tags": []
    },
    {
      "name": "Red Concrete",
      "tags": []
    },
    {
      "name": "Red Concrete Powder",
      "tags": []
    },
    {
      "name": "Red Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Red Shulker Box",
      "tags": []
    },
    {
      "name": "Red Stained Glass",
      "tags": []
    },
    {
      "name": "Red Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Red Terracotta",
      "tags": []
    },
    {
      "name": "Red Wall Banner",
      "tags": []
    },
    {
      "name": "Red Wool",
      "tags": []
    },
    {
      "name": "Shulker Box",
      "tags": []
    },
    {
      "name": "Terracotta",
      "tags": []
    },
    {
      "name": "Tinted Glass",
      "tags": []
    },
    {
      "name": "Trapped Chest",
      "tags": []
    },
    {
      "name": "White Banner",
      "tags": []
    },
    {
      "name": "White Bed",
      "tags": []
    },
    {
      "name": "White Candle",
      "tags": []
    },
    {
      "name": "White Candle Cake",
      "tags": []
    },
    {
      "name": "White Carpet",
      "tags": []
    },
    {
      "name": "White Concrete",
      "tags": []
    },
    {
      "name": "White Concrete Powder",
      "tags": []
    },
    {
      "name": "White Glazed Terracotta",
      "tags": []
    },
    {
      "name": "White Shulker Box",
      "tags": []
    },
    {
      "name": "White Stained Glass",
      "tags": []
    },
    {
      "name": "White Stained Glass Pane",
      "tags": []
    },
    {
      "name": "White Terracotta",
      "tags": []
    },
    {
      "name": "White Wall Banner",
      "tags": []
    },
    {
      "name": "White Wool",
      "tags": []
    },
    {
      "name": "Yellow Banner",
      "tags": []
    },
    {
      "name": "Yellow Bed",
      "tags": []
    },
    {
      "name": "Yellow Candle",
      "tags": []
    },
    {
      "name": "Yellow Candle Cake",
      "tags": []
    },
    {
      "name": "Yellow Carpet",
      "tags": []
    },
    {
      "name": "Yellow Concrete",
      "tags": []
    },
    {
      "name": "Yellow Concrete Powder",
      "tags": []
    },
    {
      "name": "Yellow Glazed Terracotta",
      "tags": []
    },
    {
      "name": "Yellow Shulker Box",
      "tags": []
    },
    {
      "name": "Yellow Stained Glass",
      "tags": []
    },
    {
      "name": "Yellow Stained Glass Pane",
      "tags": []
    },
    {
      "name": "Yellow Terracotta",
      "tags": []
    },
    {
      "name": "Yellow Wall Banner",
      "tags": []
    },
    {
      "name": "Yellow Wool",
      "tags": []
    }
  ],
  "redstone": [
    {
      "name": "Acacia Button",
      "tags": []
    },
    {
      "name": "Acacia Pressure Plate",
      "tags": []
    },
    {
      "name": "Activator Rail",
      "tags": []
    },
    {
      "name": "Bamboo Button",
      "tags": []
    },
    {
      "name": "Bamboo Pressure Plate",
      "tags": []
    },
    {
      "name": "Birch Button",
      "tags": []
    },
    {
      "name": "Birch Pressure Plate",
      "tags": []
    },
    {
      "name": "Calibrated Sculk Sensor",
      "tags": []
    },
    {
      "name": "Cherry Button",
      "tags": []
    },
    {
      "name": "Cherry Pressure Plate",
      "tags": []
    },
    {
      "name": "Comparator",
      "tags": []
    },
    {
      "name": "Dark Oak Button",
      "tags": []
    },
    {
      "name": "Dark Oak Pressure Plate",
      "tags": []
    },
    {
      "name": "Daylight Detector",
      "tags": []
    },
    {
      "name": "Deepslate Redstone Ore",
      "tags": []
    },
    {
      "name": "Detector Rail",
      "tags": []
    },
    {
      "name": "Dispenser",
      "tags": []
    },
    {
      "name": "Dropper",
      "tags": []
    },
    {
      "name": "Heavy Weighted Pressure Plate",
      "tags": []
    },
    {
      "name": "Hopper",
      "tags": []
    },
    {
      "name": "Jungle Button",
      "tags": []
    },
    {
      "name": "Jungle Pressure Plate",
      "tags": []
    },
    {
      "name": "Lever",
      "tags": []
    },
    {
      "name": "Light Weighted Pressure Plate",
      "tags": []
    },
    {
      "name": "Mangrove Button",
      "tags": []
    },
    {
      "name": "Mangrove Pressure Plate",
      "tags": []
    },
    {
      "name": "Moving Piston",
      "tags": []
    },
    {
      "name": "Oak Button",
      "tags": []
    },
    {
      "name": "Oak Pressure Plate",
      "tags": []
    },
    {
      "name": "Observer",
      "tags": []
    },
    {
      "name": "Pale Oak Button",
      "tags": []
    },
    {
      "name": "Pale Oak Pressure Plate",
      "tags": []
    },
    {
      "name": "Piston",
      "tags": []
    },
    {
      "name": "Piston Head",
      "tags": []
    },
    {
      "name": "Powered Rail",
      "tags": []
    },
    {
      "name": "Rail",
      "tags": []
    },
    {
      "name": "Redstone Block",
      "tags": []
    },
    {
      "name": "Redstone Lamp",
      "tags": []
    },
    {
      "name": "Redstone Ore",
      "tags": []
    },
    {
      "name": "Redstone Torch",
      "tags": []
    },
    {
      "name": "Redstone Wall Torch",
      "tags": []
    },
    {
      "name": "Redstone Wire",
      "tags": []
    },
    {
      "name": "Repeater",
      "tags": []
    },
    {
      "name": "Sculk",
      "tags": []
    },
    {
      "name": "Sculk Catalyst",
      "tags": []
    },
    {
      "name": "Sculk Sensor",
      "tags": []
    },
    {
      "name": "Sculk Shrieker",
      "tags": []
    },
    {
      "name": "Sculk Vein",
      "tags": []
    },
    {
      "name": "Spruce Button",
      "tags": []
    },
    {
      "name": "Spruce Pressure Plate",
      "tags": []
    },
    {
      "name": "Sticky Piston",
      "tags": []
    },
    {
      "name": "Stone Button",
      "tags": []
    },
    {
      "name": "Stone Pressure Plate",
      "tags": []
    },
    {
      "name": "Target",
      "tags": []
    },
    {
      "name": "Tripwire",
      "tags": []
    },
    {
      "name": "Tripwire Hook",
      "tags": []
    }
  ],
  "nether": [
    {
      "name": "Basalt",
      "tags": []
    },
    {
      "name": "Blackstone",
      "tags": []
    },
    {
      "name": "Blackstone Slab",
      "tags": []
    },
    {
      "name": "Blackstone Stairs",
      "tags": []
    },
    {
      "name": "Blackstone Wall",
      "tags": []
    },
    {
      "name": "Chiseled Nether Bricks",
      "tags": []
    },
    {
      "name": "Chiseled Polished Blackstone",
      "tags": []
    },
    {
      "name": "Cracked Nether Bricks",
      "tags": []
    },
    {
      "name": "Cracked Polished Blackstone Bricks",
      "tags": []
    },
    {
      "name": "Crimson Button",
      "tags": []
    },
    {
      "name": "Crimson Door",
      "tags": []
    },
    {
      "name": "Crimson Fence",
      "tags": []
    },
    {
      "name": "Crimson Fence Gate",
      "tags": []
    },
    {
      "name": "Crimson Fungus",
      "tags": []
    },
    {
      "name": "Crimson Hanging Sign",
      "tags": []
    },
    {
      "name": "Crimson Hyphae",
      "tags": []
    },
    {
      "name": "Crimson Nylium",
      "tags": []
    },
    {
      "name": "Crimson Planks",
      "tags": []
    },
    {
      "name": "Crimson Pressure Plate",
      "tags": []
    },
    {
      "name": "Crimson Roots",
      "tags": []
    },
    {
      "name": "Crimson Shelf",
      "tags": []
    },
    {
      "name": "Crimson Sign",
      "tags": []
    },
    {
      "name": "Crimson Slab",
      "tags": []
    },
    {
      "name": "Crimson Stairs",
      "tags": []
    },
    {
      "name": "Crimson Stem",
      "tags": []
    },
    {
      "name": "Crimson Trapdoor",
      "tags": []
    },
    {
      "name": "Crimson Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Crimson Wall Sign",
      "tags": []
    },
    {
      "name": "Dried Ghast",
      "tags": []
    },
    {
      "name": "Gilded Blackstone",
      "tags": []
    },
    {
      "name": "Glowstone",
      "tags": []
    },
    {
      "name": "Magma Block",
      "tags": []
    },
    {
      "name": "Nether Brick Fence",
      "tags": []
    },
    {
      "name": "Nether Brick Slab",
      "tags": []
    },
    {
      "name": "Nether Brick Stairs",
      "tags": []
    },
    {
      "name": "Nether Brick Wall",
      "tags": []
    },
    {
      "name": "Nether Bricks",
      "tags": []
    },
    {
      "name": "Nether Gold Ore",
      "tags": []
    },
    {
      "name": "Nether Portal",
      "tags": []
    },
    {
      "name": "Nether Quartz Ore",
      "tags": []
    },
    {
      "name": "Nether Sprouts",
      "tags": []
    },
    {
      "name": "Nether Wart",
      "tags": []
    },
    {
      "name": "Nether Wart Block",
      "tags": []
    },
    {
      "name": "Netherite Block",
      "tags": []
    },
    {
      "name": "Netherrack",
      "tags": []
    },
    {
      "name": "Polished Basalt",
      "tags": []
    },
    {
      "name": "Polished Blackstone",
      "tags": []
    },
    {
      "name": "Polished Blackstone Brick Slab",
      "tags": []
    },
    {
      "name": "Polished Blackstone Brick Stairs",
      "tags": []
    },
    {
      "name": "Polished Blackstone Brick Wall",
      "tags": []
    },
    {
      "name": "Polished Blackstone Bricks",
      "tags": []
    },
    {
      "name": "Polished Blackstone Button",
      "tags": []
    },
    {
      "name": "Polished Blackstone Pressure Plate",
      "tags": []
    },
    {
      "name": "Polished Blackstone Slab",
      "tags": []
    },
    {
      "name": "Polished Blackstone Stairs",
      "tags": []
    },
    {
      "name": "Polished Blackstone Wall",
      "tags": []
    },
    {
      "name": "Potted Crimson Fungus",
      "tags": []
    },
    {
      "name": "Potted Crimson Roots",
      "tags": []
    },
    {
      "name": "Potted Warped Fungus",
      "tags": []
    },
    {
      "name": "Potted Warped Roots",
      "tags": []
    },
    {
      "name": "Red Nether Brick Slab",
      "tags": []
    },
    {
      "name": "Red Nether Brick Stairs",
      "tags": []
    },
    {
      "name": "Red Nether Brick Wall",
      "tags": []
    },
    {
      "name": "Red Nether Bricks",
      "tags": []
    },
    {
      "name": "Smooth Basalt",
      "tags": []
    },
    {
      "name": "Soul Campfire",
      "tags": []
    },
    {
      "name": "Soul Fire",
      "tags": []
    },
    {
      "name": "Soul Lantern",
      "tags": []
    },
    {
      "name": "Soul Sand",
      "tags": []
    },
    {
      "name": "Soul Soil",
      "tags": []
    },
    {
      "name": "Soul Torch",
      "tags": []
    },
    {
      "name": "Soul Wall Torch",
      "tags": []
    },
    {
      "name": "Stripped Crimson Hyphae",
      "tags": []
    },
    {
      "name": "Stripped Crimson Stem",
      "tags": []
    },
    {
      "name": "Stripped Warped Hyphae",
      "tags": []
    },
    {
      "name": "Stripped Warped Stem",
      "tags": []
    },
    {
      "name": "Warped Button",
      "tags": []
    },
    {
      "name": "Warped Door",
      "tags": []
    },
    {
      "name": "Warped Fence",
      "tags": []
    },
    {
      "name": "Warped Fence Gate",
      "tags": []
    },
    {
      "name": "Warped Fungus",
      "tags": []
    },
    {
      "name": "Warped Hanging Sign",
      "tags": []
    },
    {
      "name": "Warped Hyphae",
      "tags": []
    },
    {
      "name": "Warped Nylium",
      "tags": []
    },
    {
      "name": "Warped Planks",
      "tags": []
    },
    {
      "name": "Warped Pressure Plate",
      "tags": []
    },
    {
      "name": "Warped Roots",
      "tags": []
    },
    {
      "name": "Warped Shelf",
      "tags": []
    },
    {
      "name": "Warped Sign",
      "tags": []
    },
    {
      "name": "Warped Slab",
      "tags": []
    },
    {
      "name": "Warped Stairs",
      "tags": []
    },
    {
      "name": "Warped Stem",
      "tags": []
    },
    {
      "name": "Warped Trapdoor",
      "tags": []
    },
    {
      "name": "Warped Wall Hanging Sign",
      "tags": []
    },
    {
      "name": "Warped Wall Sign",
      "tags": []
    },
    {
      "name": "Warped Wart Block",
      "tags": []
    }
  ],
  "end": [
    {
      "name": "Chorus Flower",
      "tags": []
    },
    {
      "name": "Chorus Plant",
      "tags": []
    },
    {
      "name": "Dragon Egg",
      "tags": []
    },
    {
      "name": "Dragon Head",
      "tags": []
    },
    {
      "name": "Dragon Wall Head",
      "tags": []
    },
    {
      "name": "End Gateway",
      "tags": []
    },
    {
      "name": "End Portal",
      "tags": []
    },
    {
      "name": "End Portal Frame",
      "tags": []
    },
    {
      "name": "End Rod",
      "tags": []
    },
    {
      "name": "End Stone",
      "tags": []
    },
    {
      "name": "End Stone Brick Slab",
      "tags": []
    },
    {
      "name": "End Stone Brick Stairs",
      "tags": []
    },
    {
      "name": "End Stone Brick Wall",
      "tags": []
    },
    {
      "name": "End Stone Bricks",
      "tags": []
    },
    {
      "name": "Ender Chest",
      "tags": []
    },
    {
      "name": "Purpur Block",
      "tags": []
    },
    {
      "name": "Purpur Pillar",
      "tags": []
    },
    {
      "name": "Purpur Slab",
      "tags": []
    },
    {
      "name": "Purpur Stairs",
      "tags": []
    }
  ],
  "especiales": [
    {
      "name": "Anvil",
      "tags": []
    },
    {
      "name": "Barrier",
      "tags": []
    },
    {
      "name": "Beacon",
      "tags": []
    },
    {
      "name": "Chain Command Block",
      "tags": []
    },
    {
      "name": "Chipped Anvil",
      "tags": []
    },
    {
      "name": "Command Block",
      "tags": []
    },
    {
      "name": "Conduit",
      "tags": []
    },
    {
      "name": "Damaged Anvil",
      "tags": []
    },
    {
      "name": "Enchanting Table",
      "tags": []
    },
    {
      "name": "Iron Door",
      "tags": []
    },
    {
      "name": "Iron Trapdoor",
      "tags": []
    },
    {
      "name": "Jigsaw",
      "tags": []
    },
    {
      "name": "Lodestone",
      "tags": []
    },
    {
      "name": "Repeating Command Block",
      "tags": []
    },
    {
      "name": "Spawner",
      "tags": []
    },
    {
      "name": "Structure Block",
      "tags": []
    },
    {
      "name": "Structure Void",
      "tags": []
    },
    {
      "name": "Trial Spawner",
      "tags": []
    }
  ]
};

/* ── State ──────────────────────────────────────────────────── */
let currentLang = 'es';
const STORAGE_KEY = 'mc262_checked_blocks';

/* ── Helpers ────────────────────────────────────────────────── */
function translateBlockName(name) {
  if (currentLang !== 'es') return name;
  if (namesTranslationEs[name]) return namesTranslationEs[name];
  
  // Auto-translate variants
  let translated = name;
  translated = translated.replace(' Polished ', ' Pulido ');
  translated = translated.replace(' Slab', ' Losa');
  translated = translated.replace(' Stairs', ' Escaleras');
  translated = translated.replace(' Wall', ' Muro');
  translated = translated.replace(' Bricks', ' Ladrillos');
  translated = translated.replace(' Brick', ' Ladrillo');
  translated = translated.replace(' Chiseled ', ' Tallado ');
  translated = translated.replace(' Cut ', ' Cortado ');
  
  // Move "Losa de" to front etc. This is basic but helps.
  if (translated.includes('Losa')) translated = 'Losa de ' + translated.replace(' Losa', '').trim();
  if (translated.includes('Escaleras')) translated = 'Escaleras de ' + translated.replace(' Escaleras', '').trim();
  if (translated.includes('Muro')) translated = 'Muro de ' + translated.replace(' Muro', '').trim();
  
  return translated;
}

function getTagHTML(tag) {
  const dict = i18n[currentLang] || i18n.es;
  if (tag === 'new') return `<span class="tag new">${dict.tag_new || '26.2'}</span>`;
  if (tag === 'nether') return `<span class="tag nether">${dict.tag_nether || 'Nether'}</span>`;
  if (tag === 'end') return `<span class="tag end">${dict.tag_end || 'End'}</span>`;
  if (tag === 'special') return `<span class="tag special">${dict.tag_special || 'Special'}</span>`;
  return '';
}

/* ── localStorage persistence ───────────────────────────────── */
function loadCheckedFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveCheckedToStorage(checkedMap) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedMap));
  } catch { /* quota exceeded, ignore */ }
}

function getAllCheckedState() {
  const map = {};
  document.querySelectorAll('.card input[type="checkbox"]').forEach(cb => {
    const card = cb.closest('.card');
    if (card) map[card.getAttribute('data-name')] = cb.checked;
  });
  return map;
}

function applyCheckedState(map) {
  document.querySelectorAll('.card input[type="checkbox"]').forEach(cb => {
    const card = cb.closest('.card');
    if (card) {
      const key = card.getAttribute('data-name');
      if (key in map) cb.checked = map[key];
    }
  });
}

/* ── Supabase (optional, debounced) ─────────────────────────── */
// Supabase disabled to keep it local-only
const supabaseClient = null;

let _supabaseSaveTimer = null;
function debouncedSaveToSupabase() {
  if (!supabaseClient) return;
  clearTimeout(_supabaseSaveTimer);
  _supabaseSaveTimer = setTimeout(async () => {
    const map = getAllCheckedState();
    const rows = Object.entries(map).map(([name, checked]) => ({
      block_name: name,
      checked,
      updated_at: new Date().toISOString(),
    }));
    try {
      // Batch upsert in chunks of 100
      for (let i = 0; i < rows.length; i += 100) {
        const chunk = rows.slice(i, i + 100);
        const { error } = await supabaseClient
          .from('blocks_checked')
          .upsert(chunk, { onConflict: 'block_name' });
        if (error) console.error('Supabase save error:', error);
      }
    } catch (e) { console.error('Supabase save failed:', e); }
  }, 2000); // 2s debounce
}

async function loadCheckedFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient
      .from('blocks_checked')
      .select('block_name, checked');
    if (error) { console.error('Supabase load error:', error); return; }
    if (!data || data.length === 0) return;
    const map = {};
    data.forEach(row => { map[row.block_name] = row.checked; });
    applyCheckedState(map);
    saveCheckedToStorage(map); // sync to localStorage
    updateAllCounts();
  } catch (e) { console.error('Supabase load failed:', e); }
}

/* ── Counting ───────────────────────────────────────────────── */
function updateCategoryCount(key) {
  const totalEl = document.getElementById('total_' + key);
  const countEl = document.getElementById('count_' + key);
  if (!totalEl || !countEl) return;
  const container = document.getElementById('cat-' + key);
  if (!container) return;
  const cards = container.querySelectorAll('.card:not(.hidden)');
  totalEl.textContent = cards.length;
  countEl.textContent = container.querySelectorAll('.card:not(.hidden) input:checked').length;
}

function updateAllCounts() {
  let checked = 0;
  let total = 0;
  document.querySelectorAll('.card').forEach(card => {
    if (!card.classList.contains('hidden')) {
      total++;
      if (card.querySelector('input:checked')) checked++;
    }
  });
  const countEl = document.getElementById('count');
  const totalEl = document.getElementById('total');
  if (countEl) countEl.textContent = checked;
  if (totalEl) totalEl.textContent = total;
  for (const key in categoriesData) updateCategoryCount(key);
}

/* ── Checkbox change handler (single save, no mass-save) ──── */
function onCheckboxChange() {
  updateAllCounts();
  // Save to localStorage immediately
  saveCheckedToStorage(getAllCheckedState());
  // Debounced save to Supabase
  debouncedSaveToSupabase();
}

/* ── Render ──────────────────────────────────────────────────── */
function render() {
  // Save current checkbox state before re-render
  const savedState = getAllCheckedState();

  for (const [key, list] of Object.entries(categoriesData)) {
    const container = document.getElementById('cat-' + key);
    if (!container) continue;
    container.innerHTML = '';

    list.forEach((item, idx) => {
      const tagsHTML = item.tags
        .filter(t => t !== 'base') // hide useless "base" tag
        .map(t => getTagHTML(t))
        .filter(Boolean)
        .join('');

      const cardId = 'chk-' + key + '-' + idx;
      const originalName = item.name; // always use EN name as key
      const displayName = translateBlockName(item.name);

      const card = document.createElement('label');
      card.className = 'card';
      card.setAttribute('data-name', originalName); // stable key!
      card.innerHTML = `
        <input type="checkbox" id="${cardId}">
        <div class="info">
          <span class="name">${displayName}</span>
          ${tagsHTML ? `<div class="tags">${tagsHTML}</div>` : ''}
        </div>`;

      // Attach event listener (not inline onclick)
      card.querySelector('input').addEventListener('change', onCheckboxChange);

      container.appendChild(card);
    });
  }

  // Restore checkbox state after render
  if (Object.keys(savedState).length > 0) {
    applyCheckedState(savedState);
  } else {
    // First render: load from localStorage
    const stored = loadCheckedFromStorage();
    if (Object.keys(stored).length > 0) applyCheckedState(stored);
  }

  updateAllCounts();

  // Update badge with real count
  const badgeTotalEl = document.querySelector('[data-i18n="badge_total"]');
  if (badgeTotalEl) {
    let globalTotal = 0;
    for (const list of Object.values(categoriesData)) globalTotal += list.length;
    const dict = i18n[currentLang] || i18n.es;
    badgeTotalEl.textContent = globalTotal + '+ ' + (dict.badge_total || 'bloques y variantes');
  }
}

/* ── Public API (called from HTML buttons) ──────────────────── */
function toggleAll(on) {
  document.querySelectorAll('.card input[type="checkbox"]').forEach(cb => cb.checked = on);
  onCheckboxChange();
}

function clearChecked() {
  document.querySelectorAll('.card input[type="checkbox"]:checked').forEach(cb => cb.checked = false);
  onCheckboxChange();
}

function filterBlocks(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.card').forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    // Also search by display name (translated)
    const displayName = card.querySelector('.name')?.textContent?.toLowerCase() || '';
    card.classList.toggle('hidden', q && !name.includes(q) && !displayName.includes(q));
  });
  updateAllCounts();
}

/* ── Language Switcher ──────────────────────────────────────── */
function setLang(lang, btn) {
  currentLang = lang;
  document.documentElement.lang = lang;

  // Update active button
  document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  // Update all i18n text elements
  const dict = i18n[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key === 'stats_prefix') return; // handle separately
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) el.placeholder = dict[key];
  });

  // Re-render cards (preserves checkbox state)
  render();

  // Update stats label
  const statsEl = document.querySelector('.stats');
  if (statsEl) {
    const checked = document.querySelectorAll('.card input:checked').length;
    let globalTotal = 0;
    for (const list of Object.values(categoriesData)) globalTotal += list.length;
    const label = lang === 'es' ? 'Marcados' : 'Checked';
    statsEl.innerHTML = `${label}: <span id="count">${checked}</span> / <span id="total">${globalTotal}</span>`;
  }
}

/* ── Init ───────────────────────────────────────────────────── */
render();
if (supabaseClient) loadCheckedFromSupabase();
