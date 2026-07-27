
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
  "Cinnabar":"Cinnabar","Polished Cinnabar":"Cinnabar Pulido","Cinnabar Bricks":"Ladrillos de Cinnabar","Cinnabar Slab":"Losa de Cinnabar","Cinnabar Stairs":"Escaleras de Cinnabar","Cinnabar Wall":"Muro de Cinnabar","Chiseled Cinnabar":"Cinnabar Tallado","Cinnabar Brick Slab":"Losa de Ladrillo de Cinnabar","Cinnabar Brick Stairs":"Escaleras de Ladrillo de Cinnabar","Cinnabar Brick Wall":"Muro de Ladrillo de Cinnabar","Sulfur":"Azufre","Polished Sulfur":"Azufre Pulido","Sulfur Bricks":"Ladrillos de Azufre","Sulfur Slab":"Losa de Azufre","Sulfur Stairs":"Escaleras de Azufre","Sulfur Wall":"Muro de Azufre","Chiseled Sulfur":"Azufre Tallado","Sulfur Brick Slab":"Losa de Ladrillo de Azufre","Sulfur Brick Stairs":"Escaleras de Ladrillo de Azufre","Sulfur Brick Wall":"Muro de Ladrillo de Azufre","Potent Sulfur":"Azufre Potente","Sulfur Spike":"Púa de Azufre","Cinnabar Ore":"Mineral de Cinnabar","Sulfur Ore":"Mineral de Azufre","Raw Cinnabar Block":"Bloque de Cinnabar Crudo","Raw Sulfur Block":"Bloque de Azufre Crudo",
  "Andesite":"Andesita","Polished Andesite":"Andesita Pulida","Andesite Slab":"Losa de Andesita","Andesite Stairs":"Escaleras de Andesita","Andesite Wall":"Muro de Andesita","Basalt":"Basalto","Polished Basalt":"Basalto Pulido","Smooth Basalt":"Basalto Liso","Basalt Slab":"Losa de Basalto","Basalt Stairs":"Escaleras de Basalto","Basalt Wall":"Muro de Basalto","Blackstone":"Piedra Negra","Polished Blackstone":"Piedra Negra Pulida","Blackstone Slab":"Losa de Piedra Negra","Blackstone Stairs":"Escaleras de Piedra Negra","Blackstone Wall":"Muro de Piedra Negra","Polished Blackstone Bricks":"Ladrillos de Piedra Negra Pulida","Cracked Polished Blackstone Bricks":"Ladrillos de Piedra Negra Pulida Rajados","Gilded Blackstone":"Piedra Negra Dorada","Bricks":"Ladrillos","Brick Slab":"Losa de Ladrillo","Brick Stairs":"Escaleras de Ladrillo","Brick Wall":"Muro de Ladrillo","Cobbled Deepslate":"Pizarra Profunda Adoquinada","Cobbled Deepslate Slab":"Losa de Pizarra Profunda Adoquinada","Cobbled Deepslate Stairs":"Escaleras de Pizarra Profunda Adoquinada","Cobbled Deepslate Wall":"Muro de Pizarra Profunda Adoquinada","Cobblestone":"Adoquín","Cobblestone Slab":"Losa de Adoquín","Cobblestone Stairs":"Escaleras de Adoquín","Cobblestone Wall":"Muro de Adoquín","Cracked Deepslate Bricks":"Ladrillos de Pizarra Profunda Rajados","Cracked Stone Bricks":"Ladrillos de Piedra Rajados","Cracked Nether Bricks":"Ladrillos del Nether Rajados","Red Nether Bricks":"Ladrillos Rojos del Nether","Cut Sandstone":"Arenisca Cortada","Cut Red Sandstone":"Arenisca Roja Cortada","Cut Sandstone Slab":"Losa de Arenisca Cortada","Cut Red Sandstone Slab":"Losa de Arenisca Roja Cortada","Deepslate":"Pizarra Profunda","Polished Deepslate":"Pizarra Profunda Pulida","Deepslate Slab":"Losa de Pizarra Profunda","Deepslate Stairs":"Escaleras de Pizarra Profunda","Deepslate Wall":"Muro de Pizarra Profunda","Deepslate Bricks":"Ladrillos de Pizarra Profunda","Deepslate Brick Slab":"Losa de Ladrillo de Pizarra Profunda","Deepslate Brick Stairs":"Escaleras de Ladrillo de Pizarra Profunda","Deepslate Brick Wall":"Muro de Ladrillo de Pizarra Profunda","Deepslate Tiles":"Baldosas de Pizarra Profunda","Deepslate Tile Slab":"Losa de Baldosa de Pizarra Profunda","Deepslate Tile Stairs":"Escaleras de Baldosa de Pizarra Profunda","Deepslate Tile Wall":"Muro de Baldosa de Pizarra Profunda","Diorite":"Diorita","Polished Diorite":"Diorita Pulida","Diorite Slab":"Losa de Diorita","Diorite Stairs":"Escaleras de Diorita","Diorite Wall":"Muro de Diorita","Dripstone Block":"Bloque de Goteador","Pointed Dripstone":"Goteador Puntiagudo","End Stone":"Piedra del End","End Stone Bricks":"Ladrillos de Piedra del End","End Stone Brick Slab":"Losa de Ladrillo de Piedra del End","End Stone Brick Stairs":"Escaleras de Ladrillo de Piedra del End","End Stone Brick Wall":"Muro de Ladrillo de Piedra del End","Granite":"Granito","Polished Granite":"Granito Pulido","Granite Slab":"Losa de Granito","Granite Stairs":"Escaleras de Granito","Granite Wall":"Muro de Granito","Mossy Cobblestone":"Adoquín Musgoso","Mossy Cobblestone Slab":"Losa de Adoquín Musgoso","Mossy Cobblestone Stairs":"Escaleras de Adoquín Musgoso","Mossy Cobblestone Wall":"Muro de Adoquín Musgoso","Mossy Stone Brick Slab":"Losa de Ladrillo de Piedra Musgoso","Moss Block":"Bloque de Musgo","Moss Carpet":"Alfombra de Musgo","Nether Bricks":"Ladrillos del Nether","Chiseled Nether Bricks":"Ladrillos del Nether Tallados","Sandstone":"Arenisca","Smooth Sandstone":"Arenisca Lisa","Sandstone Slab":"Losa de Arenisca","Sandstone Stairs":"Escaleras de Arenisca","Sandstone Wall":"Muro de Arenisca","Red Sandstone":"Arenisca Roja","Smooth Red Sandstone":"Arenisca Roja Lisa","Red Sandstone Slab":"Losa de Arenisca Roja","Red Sandstone Stairs":"Escaleras de Arenisca Roja","Red Sandstone Wall":"Muro de Arenisca Roja","Stone":"Piedra","Smooth Stone":"Piedra Lisa","Stone Bricks":"Ladrillos de Piedra","Mossy Stone Bricks":"Ladrillos de Piedra Musgosos","Chiseled Stone Bricks":"Ladrillos de Piedra Tallados","Stone Slab":"Losa de Piedra","Stone Stairs":"Escaleras de Piedra","Stone Wall":"Muro de Piedra","Infested Stone":"Piedra Infestada","Infested Cobblestone":"Adoquín Infestado","Infested Stone Bricks":"Ladrillos de Piedra Infestados","Infested Cracked Stone Bricks":"Ladrillos de Piedra Infestados Rajados","Infested Mossy Stone Bricks":"Ladrillos de Piedra Infestados Musgosos","Infested Chiseled Stone Bricks":"Ladrillos de Piedra Infestados Tallados","Infested Deepslate":"Pizarra Profunda Infestada","Tuff":"Toba","Polished Tuff":"Toba Pulida","Tuff Slab":"Losa de Toba","Tuff Stairs":"Escaleras de Toba","Tuff Wall":"Muro de Toba","Tuff Bricks":"Ladrillos de Toba","Chiseled Tuff":"Toba Tallada","Chiseled Tuff Bricks":"Ladrillos de Toba Tallados","Calcite":"Calcita","Resin Bricks":"Ladrillos de Resina","Resin Brick Slab":"Losa de Ladrillo de Resina","Resin Brick Stairs":"Escaleras de Ladrillo de Resina","Resin Brick Wall":"Muro de Ladrillo de Resina","Chiseled Resin Bricks":"Ladrillos de Resina Tallados","Resin Clump":"Grumo de Resina","Mud Bricks":"Ladrillos de Barro","Mud Brick Slab":"Losa de Ladrillo de Barro","Mud Brick Stairs":"Escaleras de Ladrillo de Barro","Mud Brick Wall":"Muro de Ladrillo de Barro","Packed Mud":"Barro Compactado",
  "Acacia Log":"Tronco de Acacia","Stripped Acacia Log":"Tronco de Acacia Despojado","Stripped Acacia Wood":"Madera de Acacia Despojada","Acacia Wood":"Madera de Acacia","Acacia Planks":"Tablas de Acacia","Acacia Slab":"Losa de Acacia","Acacia Stairs":"Escaleras de Acacia","Acacia Fence":"Valla de Acacia","Acacia Fence Gate":"Puerta de Valla de Acacia","Acacia Door":"Puerta de Acacia","Acacia Trapdoor":"Trampilla de Acacia","Acacia Pressure Plate":"Placa de Presión de Acacia","Acacia Button":"Botón de Acacia","Acacia Sign":"Cartel de Acacia","Acacia Hanging Sign":"Cartel Colgante de Acacia","Acacia Wall Sign":"Cartel de Pared de Acacia","Acacia Wall Hanging Sign":"Cartel Colgante de Pared de Acacia","Acacia Shelf":"Estante de Acacia","Acacia Sapling":"Brote de Acacia","Acacia Leaves":"Hojas de Acacia",
  "Birch Log":"Tronco de Abedul","Stripped Birch Log":"Tronco de Abedul Despojado","Stripped Birch Wood":"Madera de Abedul Despojada","Birch Wood":"Madera de Abedul","Birch Planks":"Tablas de Abedul","Birch Slab":"Losa de Abedul","Birch Stairs":"Escaleras de Abedul","Birch Fence":"Valla de Abedul","Birch Fence Gate":"Puerta de Valla de Abedul","Birch Door":"Puerta de Abedul","Birch Trapdoor":"Trampilla de Abedul","Birch Pressure Plate":"Placa de Presión de Abedul","Birch Button":"Botón de Abedul","Birch Sign":"Cartel de Abedul","Birch Hanging Sign":"Cartel Colgante de Abedul","Birch Wall Sign":"Cartel de Pared de Abedul","Birch Wall Hanging Sign":"Cartel Colgante de Pared de Abedul","Birch Shelf":"Estante de Abedul","Birch Sapling":"Brote de Abedul","Birch Leaves":"Hojas de Abedul",
  "Cherry Log":"Tronco de Cerezo","Stripped Cherry Log":"Tronco de Cerezo Despojado","Stripped Cherry Wood":"Madera de Cerezo Despojada","Cherry Wood":"Madera de Cerezo","Cherry Planks":"Tablas de Cerezo","Cherry Slab":"Losa de Cerezo","Cherry Stairs":"Escaleras de Cerezo","Cherry Fence":"Valla de Cerezo","Cherry Fence Gate":"Puerta de Valla de Cerezo","Cherry Door":"Puerta de Cerezo","Cherry Trapdoor":"Trampilla de Cerezo","Cherry Pressure Plate":"Placa de Presión de Cerezo","Cherry Button":"Botón de Cerezo","Cherry Sign":"Cartel de Cerezo","Cherry Hanging Sign":"Cartel Colgante de Cerezo","Cherry Wall Sign":"Cartel de Pared de Cerezo","Cherry Wall Hanging Sign":"Cartel Colgante de Pared de Cerezo","Cherry Shelf":"Estante de Cerezo","Cherry Sapling":"Brote de Cerezo","Cherry Leaves":"Hojas de Cerezo",
  "Dark Oak Log":"Tronco de Roble Oscuro","Stripped Dark Oak Log":"Tronco de Roble Oscuro Despojado","Stripped Dark Oak Wood":"Madera de Roble Oscuro Despojada","Dark Oak Wood":"Madera de Roble Oscuro","Dark Oak Planks":"Tablas de Roble Oscuro","Dark Oak Slab":"Losa de Roble Oscuro","Dark Oak Stairs":"Escaleras de Roble Oscuro","Dark Oak Fence":"Valla de Roble Oscuro","Dark Oak Fence Gate":"Puerta de Valla de Roble Oscuro","Dark Oak Door":"Puerta de Roble Oscuro","Dark Oak Trapdoor":"Trampilla de Roble Oscuro","Dark Oak Pressure Plate":"Placa de Presión de Roble Oscuro","Dark Oak Button":"Botón de Roble Oscuro","Dark Oak Sign":"Cartel de Roble Oscuro","Dark Oak Hanging Sign":"Cartel Colgante de Roble Oscuro","Dark Oak Wall Sign":"Cartel de Pared de Roble Oscuro","Dark Oak Wall Hanging Sign":"Cartel Colgante de Pared de Roble Oscuro","Dark Oak Shelf":"Estante de Roble Oscuro","Dark Oak Sapling":"Brote de Roble Oscuro","Dark Oak Leaves":"Hojas de Roble Oscuro",
  "Jungle Log":"Tronco de Selva","Stripped Jungle Log":"Tronco de Selva Despojado","Stripped Jungle Wood":"Madera de Selva Despojada","Jungle Wood":"Madera de Selva","Jungle Planks":"Tablas de Selva","Jungle Slab":"Losa de Selva","Jungle Stairs":"Escaleras de Selva","Jungle Fence":"Valla de Selva","Jungle Fence Gate":"Puerta de Valla de Selva","Jungle Door":"Puerta de Selva","Jungle Trapdoor":"Trampilla de Selva","Jungle Pressure Plate":"Placa de Presión de Selva","Jungle Button":"Botón de Selva","Jungle Sign":"Cartel de Selva","Jungle Hanging Sign":"Cartel Colgante de Selva","Jungle Wall Sign":"Cartel de Pared de Selva","Jungle Wall Hanging Sign":"Cartel Colgante de Pared de Selva","Jungle Shelf":"Estante de Selva","Jungle Sapling":"Brote de Selva","Jungle Leaves":"Hojas de Selva",
  "Mangrove Log":"Tronco de Mangle","Stripped Mangrove Log":"Tronco de Mangle Despojado","Stripped Mangrove Wood":"Madera de Mangle Despojada","Mangrove Wood":"Madera de Mangle","Mangrove Planks":"Tablas de Mangle","Mangrove Slab":"Losa de Mangle","Mangrove Stairs":"Escaleras de Mangle","Mangrove Fence":"Valla de Mangle","Mangrove Fence Gate":"Puerta de Valla de Mangle","Mangrove Door":"Puerta de Mangle","Mangrove Trapdoor":"Trampilla de Mangle","Mangrove Pressure Plate":"Placa de Presión de Mangle","Mangrove Button":"Botón de Mangle","Mangrove Sign":"Cartel de Mangle","Mangrove Hanging Sign":"Cartel Colgante de Mangle","Mangrove Wall Sign":"Cartel de Pared de Mangle","Mangrove Wall Hanging Sign":"Cartel Colgante de Pared de Mangle","Mangrove Shelf":"Estante de Mangle","Mangrove Propagule":"Propágulo de Mangle","Mangrove Roots":"Raíces de Mangle","Mangrove Leaves":"Hojas de Mangle",
  "Oak Log":"Tronco de Roble","Stripped Oak Log":"Tronco de Roble Despojado","Stripped Oak Wood":"Madera de Roble Despojada","Oak Wood":"Madera de Roble","Oak Planks":"Tablas de Roble","Oak Slab":"Losa de Roble","Oak Stairs":"Escaleras de Roble","Oak Fence":"Valla de Roble","Oak Fence Gate":"Puerta de Valla de Roble","Oak Door":"Puerta de Roble","Oak Trapdoor":"Trampilla de Roble","Oak Pressure Plate":"Placa de Presión de Roble","Oak Button":"Botón de Roble","Oak Sign":"Cartel de Roble","Oak Hanging Sign":"Cartel Colgante de Roble","Oak Wall Sign":"Cartel de Pared de Roble","Oak Wall Hanging Sign":"Cartel Colgante de Pared de Roble","Oak Shelf":"Estante de Roble","Oak Sapling":"Brote de Roble","Oak Leaves":"Hojas de Roble",
  "Spruce Log":"Tronco de Abeto","Stripped Spruce Log":"Tronco de Abeto Despojado","Stripped Spruce Wood":"Madera de Abeto Despojada","Spruce Wood":"Madera de Abeto","Spruce Planks":"Tablas de Abeto","Spruce Slab":"Losa de Abeto","Spruce Stairs":"Escaleras de Abeto","Spruce Fence":"Valla de Abeto","Spruce Fence Gate":"Puerta de Valla de Abeto","Spruce Door":"Puerta de Abeto","Spruce Trapdoor":"Trampilla de Abeto","Spruce Pressure Plate":"Placa de Presión de Abeto","Spruce Button":"Botón de Abeto","Spruce Sign":"Cartel de Abeto","Spruce Hanging Sign":"Cartel Colgante de Abeto","Spruce Wall Sign":"Cartel de Pared de Abeto","Spruce Wall Hanging Sign":"Cartel Colgante de Pared de Abeto","Spruce Shelf":"Estante de Abeto","Spruce Sapling":"Brote de Abeto","Spruce Leaves":"Hojas de Abeto",
  "Bamboo":"Bambú","Bamboo Block":"Bloque de Bambú","Bamboo Planks":"Tablas de Bambú","Bamboo Slab":"Losa de Bambú","Bamboo Stairs":"Escaleras de Bambú","Bamboo Fence":"Valla de Bambú","Bamboo Fence Gate":"Puerta de Valla de Bambú","Bamboo Door":"Puerta de Bambú","Bamboo Trapdoor":"Trampilla de Bambú","Bamboo Pressure Plate":"Placa de Presión de Bambú","Bamboo Button":"Botón de Bambú","Bamboo Sign":"Cartel de Bambú","Bamboo Hanging Sign":"Cartel Colgante de Bambú","Bamboo Wall Sign":"Cartel de Pared de Bambú","Bamboo Wall Hanging Sign":"Cartel Colgante de Pared de Bambú","Bamboo Shelf":"Estante de Bambú","Bamboo Shoot":"Brotes de Bambú","Bamboo Mosaic":"Mosaico de Bambú","Bamboo Mosaic Slab":"Losa de Mosaico de Bambú","Bamboo Mosaic Stairs":"Escaleras de Mosaico de Bambú",
  "Crimson Planks":"Tablas Carmesí","Crimson Stem":"Tallo Carmesí","Stripped Crimson Stem":"Tallo Carmesí Despojado","Crimson Hyphae":"Hifas Carmesí","Crimson Nylium":"Nylium Carmesí","Crimson Roots":"Raíces Carmesí","Crimson Fungus":"Hongos Carmesí","Crimson Slab":"Losa Carmesí","Crimson Stairs":"Escaleras Carmesí","Crimson Fence":"Valla Carmesí","Crimson Fence Gate":"Puerta de Valla Carmesí","Crimson Door":"Puerta Carmesí","Crimson Trapdoor":"Trampilla Carmesí","Crimson Pressure Plate":"Placa de Presión Carmesí","Crimson Button":"Botón Carmesí","Crimson Sign":"Cartel Carmesí","Crimson Hanging Sign":"Cartel Colgante Carmesí","Crimson Shelf":"Estante Carmesí","Crimson Wall Sign":"Cartel de Pared Carmesí","Crimson Wall Hanging Sign":"Cartel Colgante de Pared Carmesí",
  "Warped Planks":"Tablas Deformadas","Warped Stem":"Tallo Deformado","Stripped Warped Stem":"Tallo Deformado Despojado","Warped Hyphae":"Hifas Deformadas","Warped Nylium":"Nylium Deformado","Warped Roots":"Raíces Deformadas","Warped Fungus":"Hongos Deformados","Warped Wart Block":"Bloque de Verruga Deformada","Warped Slab":"Losa Deformada","Warped Stairs":"Escaleras Deformadas","Warped Fence":"Valla Deformada","Warped Fence Gate":"Puerta de Valla Deformada","Warped Door":"Puerta Deformada","Warped Trapdoor":"Trampilla Deformada","Warped Pressure Plate":"Placa de Presión Deformada","Warped Button":"Botón Deformado","Warped Sign":"Cartel Deformado","Warped Hanging Sign":"Cartel Colgante Deformado","Warped Shelf":"Estante Deformado","Warped Wall Sign":"Cartel de Pared Deformado","Warped Wall Hanging Sign":"Cartel Colgante de Pared Deformado",
  "Allium":"Alium","Azalea":"Azalea","Azalea Leaves":"Hojas de Azalea","Flowering Azalea":"Azalea en Flor","Flowering Azalea Leaves":"Hojas de Azalea en Flor","Azure Bluet":"Azul de Azure","Bush":"Arbusto","Cornflower":"Florcorneta","Dandelion":"Diente de León","Lily of the Valley":"Lirio del Valle","Lilac":"Lila","Poppy":"Amapola","Oxeye Daisy":"Margarita del Ojo","Blue Orchid":"Orquídea Azul","Pink Tulip":"Tulipán Rosa","Orange Tulip":"Tulipán Naranja","White Tulip":"Tulipán Blanco","Red Tulip":"Tulipán Rojo","Wither Rose":"Rosa Marchita","Cactus":"Cactus","Cactus Flower":"Flor de Cactus","Grass Block":"Bloque de Césped","Dirt":"Tierra","Coarse Dirt":"Tierra Gruesa","Dirt Path":"Camino de Tierra","Farmland":"Tierra de Cultivo","Gravel":"Grava","Sand":"Arena","Red Sand":"Arena Roja","Clay":"Arcilla","Snow":"Nieve","Snow Block":"Bloque de Nieve","Ice":"Hielo","Blue Ice":"Hielo Azul","Packed Ice":"Hielo Compactado","Melon":"Melón","Attached Melon Stem":"Tallo de Melón Adjunto","Melon Stem":"Tallo de Melón","Pumpkin":"Calabaza","Attached Pumpkin Stem":"Tallo de Calabaza Adjunto","Pumpkin Stem":"Tallo de Calabaza","Carved Pumpkin":"Calabaza Tallada","Jack o'Lantern":"Calabaza Iluminada","Beetroots":"Remolacha","Carrots":"Zanahorias","Potatoes":"Patatas","Wheat":"Trigo","Cocoa":"Cacao","Kelp":"Alga Marina","Kelp Plant":"Planta de Alga Marina","Dried Kelp Block":"Bloque de Alga Marina Seca","Seagrass":"Hierba Marina","Tall Seagrass":"Hierba Marina Alta","Sea Pickle":"Pepinillo de Mar","Firefly Bush":"Arbusto de Luciérnaga","Closed Eyeblossom":"Eyeblossom Cerrado","Big Dripleaf":"Hoja Grande de Goteo","Big Dripleaf Stem":"Tallo de Hoja Grande de Goteo","Small Dripleaf":"Hoja Pequeña de Goteo","Spore Blossom":"Flor de Esporas","Pink Petals":"Pétalos Rosas","Torchflower":"Antorcha Floral","Pitcher Plant":"Planta Lanzadora","Torchflower Seeds":"Semillas de Antorcha Floral","Brown Mushroom Block":"Bloque de Hongo Marrón","Red Mushroom Block":"Bloque de Hongo Rojo","Mushroom Stem":"Tallo de Hongo","Mycelium":"Micelio","Podzol":"Podzol","Rooted Dirt":"Tierra con Raíces",
  "Brain Coral":"Coral Cerebro","Brain Coral Block":"Bloque de Coral Cerebro","Brain Coral Fan":"Abanico de Coral Cerebro","Brain Coral Wall Fan":"Abanico de Pared de Coral Cerebro","Dead Brain Coral Block":"Bloque de Coral Cerebro Muerto","Dead Brain Coral Fan":"Abanico de Coral Cerebro Muerto","Dead Brain Coral Wall Fan":"Abanico de Pared de Coral Cerebro Muerto","Bubble Coral":"Coral Burbuja","Bubble Coral Block":"Bloque de Coral Burbuja","Bubble Coral Fan":"Abanico de Coral Burbuja","Bubble Coral Wall Fan":"Abanico de Pared de Coral Burbuja","Dead Bubble Coral Block":"Bloque de Coral Burbuja Muerto","Dead Bubble Coral Fan":"Abanico de Coral Burbuja Muerto","Dead Bubble Coral Wall Fan":"Abanico de Pared de Coral Burbuja Muerto","Fire Coral":"Coral de Fuego","Fire Coral Block":"Bloque de Coral de Fuego","Fire Coral Fan":"Abanico de Coral de Fuego","Fire Coral Wall Fan":"Abanico de Pared de Coral de Fuego","Dead Fire Coral Block":"Bloque de Coral de Fuego Muerto","Dead Fire Coral Fan":"Abanico de Coral de Fuego Muerto","Dead Fire Coral Wall Fan":"Abanico de Pared de Coral de Fuego Muerto","Horn Coral":"Coral Cuerno","Horn Coral Block":"Bloque de Coral Cuerno","Horn Coral Fan":"Abanico de Coral Cuerno","Horn Coral Wall Fan":"Abanico de Pared de Coral Cuerno","Dead Horn Coral Block":"Bloque de Coral Cuerno Muerto","Dead Horn Coral Fan":"Abanico de Coral Cuerno Muerto","Dead Horn Coral Wall Fan":"Abanico de Pared de Coral Cuerno Muerto","Tube Coral":"Coral Tubo","Tube Coral Block":"Bloque de Coral Tubo","Tube Coral Fan":"Abanico de Coral Tubo","Tube Coral Wall Fan":"Abanico de Pared de Coral Tubo","Dead Tube Coral Block":"Bloque de Coral Tubo Muerto","Dead Tube Coral Fan":"Abanico de Coral Tubo Muerto","Dead Tube Coral Wall Fan":"Abanico de Pared de Coral Tubo Muerto","Frogspawn":"Desove de Rana",
  "Hanging Roots":"Raíces Colgantes","Leaf Litter":"Hojarasca","Glow Lichen":"Liquen Brillante","Cave Vines":"Enredaderas de Cueva","Cave Vines Plant":"Planta de Enredaderas de Cueva","Dead Bush":"Arbusto Muerto","Fern":"Helecho","Large Fern":"Helecho Grande","Shroomlight":"Luz de Hongo","Nether Wart Block":"Bloque de Verruga del Nether","Bone Block":"Bloque de Hueso",
  "Coal Ore":"Mineral de Carbón","Deepslate Coal Ore":"Mineral de Carbón de Pizarra Profunda","Iron Ore":"Mineral de Hierro","Deepslate Iron Ore":"Mineral de Hierro de Pizarra Profunda","Copper Ore":"Mineral de Cobre","Deepslate Copper Ore":"Mineral de Cobre de Pizarra Profunda","Copper Block":"Bloque de Cobre","Cut Copper":"Cobre Cortado","Cut Copper Slab":"Losa de Cobre Cortado","Cut Copper Stairs":"Escaleras de Cobre Cortado","Exposed Cut Copper":"Cobre Cortado Expuesto","Exposed Cut Copper Slab":"Losa de Cobre Cortado Expuesto","Exposed Cut Copper Stairs":"Escaleras de Cobre Cortado Expuesto","Oxidized Copper":"Cobre Oxidado","Oxidized Cut Copper":"Cobre Cortado Oxidado","Oxidized Cut Copper Slab":"Losa de Cobre Cortado Oxidado","Oxidized Cut Copper Stairs":"Escaleras de Cobre Cortado Oxidado","Weathered Copper":"Cobre Envejecido","Weathered Cut Copper":"Cobre Cortado Envejecido","Weathered Cut Copper Slab":"Losa de Cobre Cortado Envejecido","Weathered Cut Copper Stairs":"Escaleras de Cobre Cortado Envejecido","Copper Bulb":"Bombilla de Cobre","Exposed Copper Bulb":"Bombilla de Cobre Expuesta","Weathered Copper Bulb":"Bombilla de Cobre Envejecida","Oxidized Copper Bulb":"Bombilla de Cobre Oxidada","Copper Grate":"Reja de Cobre","Copper Door":"Puerta de Cobre","Copper Trapdoor":"Trampilla de Cobre","Copper Chain":"Cadena de Cobre","Copper Bars":"Barras de Cobre","Copper Torch":"Antorcha de Cobre","Copper Wall Torch":"Antorcha de Pared de Cobre","Copper Lantern":"Linterna de Cobre","Copper Chest":"Cofre de Cobre","Copper Golem Statue":"Estatua de Golem de Cobre",
  "Gold Ore":"Mineral de Oro","Deepslate Gold Ore":"Mineral de Oro de Pizarra Profunda","Nether Gold Ore":"Mineral de Oro del Nether","Gold Block":"Bloque de Oro","Raw Gold Block":"Bloque de Oro Crudo","Diamond Ore":"Mineral de Diamante","Deepslate Diamond Ore":"Mineral de Diamante de Pizarra Profunda","Diamond Block":"Bloque de Diamante","Emerald Ore":"Mineral de Esmeralda","Deepslate Emerald Ore":"Mineral de Esmeralda de Pizarra Profunda","Emerald Block":"Bloque de Esmeralda","Lapis Ore":"Mineral de Lapislázuli","Deepslate Lapis Ore":"Mineral de Lapislázuli de Pizarra Profunda","Lapis Block":"Bloque de Lapislázuli","Redstone Ore":"Mineral de Redstone","Deepslate Redstone Ore":"Mineral de Redstone de Pizarra Profunda","Redstone Block":"Bloque de Redstone","Nether Quartz Ore":"Mineral de Cuarzo del Nether","Quartz Block":"Bloque de Cuarzo","Quartz Bricks":"Ladrillos de Cuarzo","Quartz Slab":"Losa de Cuarzo","Quartz Stairs":"Escaleras de Cuarzo","Quartz Wall":"Muro de Cuarzo","Smooth Quartz":"Cuarzo Liso","Chiseled Quartz Block":"Bloque de Cuarzo Tallado","Amethyst Block":"Bloque de Amatista","Amethyst Cluster":"Grupo de Amatista","Budding Amethyst":"Amatista Brotante","Small Amethyst Bud":"Brote Pequeño de Amatista","Medium Amethyst Bud":"Brote Medio de Amatista","Large Amethyst Bud":"Brote Grande de Amatista","Ancient Debris":"Restos Antiguos","Netherite Block":"Bloque de Netherita","Block of Coal":"Bloque de Carbón","Block of Iron":"Bloque de Hierro","Raw Copper Block":"Bloque de Cobre Crudo",
  "Glass":"Vidrio","Glass Pane":"Panel de Vidrio","Black Stained Glass":"Vidrio Tintado Negro","Black Stained Glass Pane":"Panel de Vidrio Tintado Negro","Blue Stained Glass":"Vidrio Tintado Azul","Blue Stained Glass Pane":"Panel de Vidrio Tintado Azul","Brown Stained Glass":"Vidrio Tintado Marrón","Brown Stained Glass Pane":"Panel de Vidrio Tintado Marrón","Cyan Stained Glass":"Vidrio Tintado Cian","Cyan Stained Glass Pane":"Panel de Vidrio Tintado Cian","Gray Stained Glass":"Vidrio Tintado Gris","Gray Stained Glass Pane":"Panel de Vidrio Tintado Gris","Green Stained Glass":"Vidrio Tintado Verde","Green Stained Glass Pane":"Panel de Vidrio Tintado Verde","Light Blue Stained Glass":"Vidrio Tintado Azul Claro","Light Blue Stained Glass Pane":"Panel de Vidrio Tintado Azul Claro","Light Gray Stained Glass":"Vidrio Tintado Gris Claro","Light Gray Stained Glass Pane":"Panel de Vidrio Tintado Gris Claro","Lime Stained Glass":"Vidrio Tintado Lima","Lime Stained Glass Pane":"Panel de Vidrio Tintado Lima","Magenta Stained Glass":"Vidrio Tintado Magenta","Magenta Stained Glass Pane":"Panel de Vidrio Tintado Magenta","Orange Stained Glass":"Vidrio Tintado Naranja","Orange Stained Glass Pane":"Panel de Vidrio Tintado Naranja","Pink Stained Glass":"Vidrio Tintado Rosa","Pink Stained Glass Pane":"Panel de Vidrio Tintado Rosa","Purple Stained Glass":"Vidrio Tintado Morado","Purple Stained Glass Pane":"Panel de Vidrio Tintado Morado","Red Stained Glass":"Vidrio Tintado Rojo","Red Stained Glass Pane":"Panel de Vidrio Tintado Rojo","White Stained Glass":"Vidrio Tintado Blanco","White Stained Glass Pane":"Panel de Vidrio Tintado Blanco","Yellow Stained Glass":"Vidrio Tintado Amarillo","Yellow Stained Glass Pane":"Panel de Vidrio Tintado Amarillo",
  "Black Concrete":"Concreto Negro","Black Concrete Powder":"Polvo de Concreto Negro","Blue Concrete":"Concreto Azul","Blue Concrete Powder":"Polvo de Concreto Azul","Brown Concrete":"Concreto Marrón","Brown Concrete Powder":"Polvo de Concreto Marrón","Cyan Concrete":"Concreto Cian","Cyan Concrete Powder":"Polvo de Concreto Cian","Gray Concrete":"Concreto Gris","Gray Concrete Powder":"Polvo de Concreto Gris","Green Concrete":"Concreto Verde","Green Concrete Powder":"Polvo de Concreto Verde","Light Blue Concrete":"Concreto Azul Claro","Light Blue Concrete Powder":"Polvo de Concreto Azul Claro","Light Gray Concrete":"Concreto Gris Claro","Light Gray Concrete Powder":"Polvo de Concreto Gris Claro","Lime Concrete":"Concreto Lima","Lime Concrete Powder":"Polvo de Concreto Lima","Magenta Concrete":"Concreto Magenta","Magenta Concrete Powder":"Polvo de Concreto Magenta","Orange Concrete":"Concreto Naranja","Orange Concrete Powder":"Polvo de Concreto Naranja","Pink Concrete":"Concreto Rosa","Pink Concrete Powder":"Polvo de Concreto Rosa","Purple Concrete":"Concreto Morado","Purple Concrete Powder":"Polvo de Concreto Morado","Red Concrete":"Concreto Rojo","Red Concrete Powder":"Polvo de Concreto Rojo","White Concrete":"Concreto Blanco","White Concrete Powder":"Polvo de Concreto Blanco","Yellow Concrete":"Concreto Amarillo","Yellow Concrete Powder":"Polvo de Concreto Amarillo",
  "Terracotta":"Terracota","Black Terracotta":"Terracota Negra","Blue Terracotta":"Terracota Azul","Brown Terracotta":"Terracota Marrón","Cyan Terracotta":"Terracota Cian","Gray Terracotta":"Terracota Gris","Green Terracotta":"Terracota Verde","Light Blue Terracotta":"Terracota Azul Claro","Light Gray Terracotta":"Terracota Gris Claro","Lime Terracotta":"Terracota Lima","Magenta Terracotta":"Terracota Magenta","Orange Terracotta":"Terracota Naranja","Pink Terracotta":"Terracota Rosa","Purple Terracotta":"Terracota Morada","Red Terracotta":"Terracota Roja","White Terracotta":"Terracota Blanca","Yellow Terracotta":"Terracota Amarilla",
  "Black Glazed Terracotta":"Terracota Vidriada Negra","Blue Glazed Terracotta":"Terracota Vidriada Azul","Brown Glazed Terracotta":"Terracota Vidriada Marrón","Cyan Glazed Terracotta":"Terracota Vidriada Cian","Gray Glazed Terracotta":"Terracota Vidriada Gris","Green Glazed Terracotta":"Terracota Vidriada Verde","Light Blue Glazed Terracotta":"Terracota Vidriada Azul Claro","Light Gray Glazed Terracotta":"Terracota Vidriada Gris Claro","Lime Glazed Terracotta":"Terracota Vidriada Lima","Magenta Glazed Terracotta":"Terracota Vidriada Magenta","Orange Glazed Terracotta":"Terracota Vidriada Naranja","Pink Glazed Terracotta":"Terracota Vidriada Rosa","Purple Glazed Terracotta":"Terracota Vidriada Morada","Red Glazed Terracotta":"Terracota Vidriada Roja","White Glazed Terracotta":"Terracota Vidriada Blanca","Yellow Glazed Terracotta":"Terracota Vidriada Amarilla",
  "Carpet":"Alfombra","Black Carpet":"Alfombra Negra","Blue Carpet":"Alfombra Azul","Brown Carpet":"Alfombra Marrón","Cyan Carpet":"Alfombra Cian","Gray Carpet":"Alfombra Gris","Green Carpet":"Alfombra Verde","Light Blue Carpet":"Alfombra Azul Claro","Light Gray Carpet":"Alfombra Gris Claro","Lime Carpet":"Alfombra Lima","Magenta Carpet":"Alfombra Magenta","Orange Carpet":"Alfombra Naranja","Pink Carpet":"Alfombra Rosa","Purple Carpet":"Alfombra Morada","Red Carpet":"Alfombra Roja","White Carpet":"Alfombra Blanca","Yellow Carpet":"Alfombra Amarilla",
  "Decorated Pot":"Maceta Decorada","Flower Pot":"Maceta","Banner":"Estandarte","Black Banner":"Estandarte Negro","Blue Banner":"Estandarte Azul","Brown Banner":"Estandarte Marrón","Cyan Banner":"Estandarte Cian","Gray Banner":"Estandarte Gris","Green Banner":"Estandarte Verde","Light Blue Banner":"Estandarte Azul Claro","Light Gray Banner":"Estandarte Gris Claro","Lime Banner":"Estandarte Lima","Magenta Banner":"Estandarte Magenta","Orange Banner":"Estandarte Naranja","Pink Banner":"Estandarte Rosa","Purple Banner":"Estandarte Morado","Red Banner":"Estandarte Rojo","White Banner":"Estandarte Blanco","Yellow Banner":"Estandarte Amarillo",
  "Black Wall Banner":"Estandarte de Pared Negro","Blue Wall Banner":"Estandarte de Pared Azul","Brown Wall Banner":"Estandarte de Pared Marrón","Cyan Wall Banner":"Estandarte de Pared Cian","Gray Wall Banner":"Estandarte de Pared Gris","Green Wall Banner":"Estandarte de Pared Verde","Light Blue Wall Banner":"Estandarte de Pared Azul Claro","Light Gray Wall Banner":"Estandarte de Pared Gris Claro","Lime Wall Banner":"Estandarte de Pared Lima","Magenta Wall Banner":"Estandarte de Pared Magenta","Orange Wall Banner":"Estandarte de Pared Naranja","Pink Wall Banner":"Estandarte de Pared Rosa","Purple Wall Banner":"Estandarte de Pared Morado","Red Wall Banner":"Estandarte de Pared Rojo","White Wall Banner":"Estandarte de Pared Blanco","Yellow Wall Banner":"Estandarte de Pared Amarillo",
  "Candle":"Vela","Black Candle":"Vela Negra","Blue Candle":"Vela Azul","Brown Candle":"Vela Marrón","Cyan Candle":"Vela Cian","Gray Candle":"Vela Gris","Green Candle":"Vela Verde","Light Blue Candle":"Vela Azul Claro","Light Gray Candle":"Vela Gris Claro","Lime Candle":"Vela Lima","Magenta Candle":"Vela Magenta","Orange Candle":"Vela Naranja","Pink Candle":"Vela Rosa","Purple Candle":"Vela Morada","Red Candle":"Vela Roja","White Candle":"Vela Blanca","Yellow Candle":"Vela Amarilla",
  "Cake with Candle":"Pastel con Vela","Cake with Black Candle":"Pastel con Vela Negra","Cake with Blue Candle":"Pastel con Vela Azul","Cake with Brown Candle":"Pastel con Vela Marrón","Cake with Cyan Candle":"Pastel con Vela Cian","Cake with Gray Candle":"Pastel con Vela Gris","Cake with Green Candle":"Pastel con Vela Verde","Cake with Light Blue Candle":"Pastel con Vela Azul Claro","Cake with Light Gray Candle":"Pastel con Vela Gris Claro","Cake with Lime Candle":"Pastel con Vela Lima","Cake with Magenta Candle":"Pastel con Vela Magenta","Cake with Orange Candle":"Pastel con Vela Naranja","Cake with Pink Candle":"Pastel con Vela Rosa","Cake with Purple Candle":"Pastel con Vela Morada","Cake with Red Candle":"Pastel con Vela Roja","Cake with White Candle":"Pastel con Vela Blanca","Cake with Yellow Candle":"Pastel con Vela Amarilla",
  "Bed":"Cama","Black Bed":"Cama Negra","Blue Bed":"Cama Azul","Brown Bed":"Cama Marrón","Cyan Bed":"Cama Cian","Gray Bed":"Cama Gris","Green Bed":"Cama Verde","Light Blue Bed":"Cama Azul Claro","Light Gray Bed":"Cama Gris Claro","Lime Bed":"Cama Lima","Magenta Bed":"Cama Magenta","Orange Bed":"Cama Naranja","Pink Bed":"Cama Rosa","Purple Bed":"Cama Morada","Red Bed":"Cama Roja","White Bed":"Cama Blanca","Yellow Bed":"Cama Amarilla",
  "Shulker Box":"Caja Shulker","Black Shulker Box":"Caja Shulker Negra","Blue Shulker Box":"Caja Shulker Azul","Brown Shulker Box":"Caja Shulker Marrón","Cyan Shulker Box":"Caja Shulker Cian","Gray Shulker Box":"Caja Shulker Gris","Green Shulker Box":"Caja Shulker Verde","Light Blue Shulker Box":"Caja Shulker Azul Claro","Light Gray Shulker Box":"Caja Shulker Gris Claro","Lime Shulker Box":"Caja Shulker Lima","Magenta Shulker Box":"Caja Shulker Magenta","Orange Shulker Box":"Caja Shulker Naranja","Pink Shulker Box":"Caja Shulker Rosa","Purple Shulker Box":"Caja Shulker Morada","Red Shulker Box":"Caja Shulker Roja","White Shulker Box":"Caja Shulker Blanca","Yellow Shulker Box":"Caja Shulker Amarilla",
  "Redstone Dust":"Polvo de Redstone","Repeater":"Repetidor","Comparator":"Comparador","Observer":"Observador","Piston":"Pistón","Sticky Piston":"Pistón Pegajoso","Piston Head":"Cabeza de Pistón","Moving Piston":"Pistón en Movimiento","Dispenser":"Dispensador","Dropper":"Expulsador","Hopper":"Tolva","Activator Rail":"Riel Activador","Detector Rail":"Riel Detector","Powered Rail":"Riel Propulsado","Rail":"Riel","Lever":"Palanca","Redstone Torch":"Antorcha de Redstone","Redstone Wall Torch":"Antorcha de Pared de Redstone","Stone Button":"Botón de Piedra","Stone Pressure Plate":"Placa de Presión de Piedra","Weighted Pressure Plate":"Placa de Presión Pesada","Heavy Weighted Pressure Plate":"Placa de Presión Pesada (Pesada)","Light Weighted Pressure Plate":"Placa de Presión Pesada (Ligera)","Daylight Detector":"Detector de Luz Diurna","Target":"Objetivo","Calibrated Sculk Sensor":"Sensor Sculk Calibrado","Sculk Sensor":"Sensor Sculk","Sculk Shrieker":"Gritador Sculk","Sculk":"Sculk","Sculk Vein":"Vena Sculk","Sculk Catalyst":"Catalizador Sculk","Creaking Heart":"Corazón Crujiente","Command Block":"Bloque de Comandos","Chain Command Block":"Bloque de Comandos Encadenado","Repeating Command Block":"Bloque de Comandos Repetidor","Jigsaw":"Rompecabezas","Crafter":"Artesano","Lightning Rod":"Pararrayos",
  "Netherrack":"Netherrack","Magma Block":"Bloque de Magma","Glowstone":"Piedra Brillante","Soul Sand":"Arena de Almas","Soul Soil":"Suelo de Almas","Soul Torch":"Antorcha de Almas","Soul Wall Torch":"Antorcha de Pared de Almas","Nether Brick Slab":"Losa de Ladrillo del Nether","Nether Brick Stairs":"Escaleras de Ladrillo del Nether","Nether Brick Wall":"Muro de Ladrillo del Nether","Crying Obsidian":"Obsidiana Llorona",
  "End Portal Frame":"Marco del Portal del End","End Portal":"Portal del End","Dragon Egg":"Huevo de Dragón","Dragon Head":"Cabeza de Dragón","Dragon Wall Head":"Cabeza de Dragón de Pared","End Rod":"Varilla del End","Purpur Block":"Bloque de Purpur","Purpur Pillar":"Pilar de Purpur","Purpur Slab":"Losa de Purpur","Purpur Stairs":"Escaleras de Purpur","Chorus Plant":"Planta de Corus","Chorus Flower":"Flor de Corus","Ender Chest":"Cofre del End",
  "Bedrock":"Lecho de Roca","Barrier":"Barrera","Structure Block":"Bloque de Estructura","Light":"Luz","Spawner":"Generador","Beacon":"Baliza","Conduit":"Conducto","Heavy Core":"Núcleo Pesado","Trial Spawner":"Generador de Prueba","Vault":"Bóveda",
  "Polished Andesite Slab":"Losa de Andesita Pulida","Polished Andesite Stairs":"Escaleras de Andesita Pulida","Polished Blackstone Slab":"Losa de Piedra Negra Pulida","Polished Blackstone Stairs":"Escaleras de Piedra Negra Pulida","Polished Deepslate Slab":"Losa de Pizarra Profunda Pulida","Polished Deepslate Stairs":"Escaleras de Pizarra Profunda Pulida","Polished Diorite Slab":"Losa de Diorita Pulida","Polished Diorite Stairs":"Escaleras de Diorita Pulida","Polished Granite Slab":"Losa de Granito Pulido","Polished Granite Stairs":"Escaleras de Granito Pulido","Polished Tuff Slab":"Losa de Toba Pulida","Polished Tuff Stairs":"Escaleras de Toba Pulida",
  "Bookshelf":"Estantería","Chiseled Bookshelf":"Estantería Tallada","Chest":"Cofre","Barrel":"Barril","Furnace":"Horno","Blast Furnace":"Alto Horno","Smoker":"Ahumador","Cartography Table":"Mesa de Cartografía","Fletching Table":"Mesa de Flechas","Smithing Table":"Mesa de Herrería","Loom":"Telar","Composter":"Compostador","Grindstone":"Piedra de Afilar","Lectern":"Atril","Stonecutter":"Cortapiedras","Enchanting Table":"Mesa de Encantamientos","Anvil":"Yunque","Chipped Anvil":"Yunque Agrietado","Damaged Anvil":"Yunque Dañado","Bell":"Campana","Brewing Stand":"Soporte de Pociones","Cauldron":"Caldero","Campfire":"Fogata","Soul Campfire":"Fogata de Almas","Lantern":"Linterna","Soul Lantern":"Linterna de Almas","Lodestone":"Magnetita","Respawn Anchor":"Ancla de Reaparición","Dried Ghast":"Ghast Seco",
  "Exposed Copper":"Cobre Expuesto","Exposed Chiseled Copper":"Cobre Tallado Expuesto","Exposed Copper Bars":"Barras de Cobre Expuestas","Exposed Copper Bulb":"Bombilla de Cobre Expuesta","Exposed Copper Chain":"Cadena de Cobre Expuesta","Exposed Copper Chest":"Cofre de Cobre Expuesto","Exposed Copper Door":"Puerta de Cobre Expuesta","Exposed Copper Golem Statue":"Estatua de Golem de Cobre Expuesta","Exposed Copper Grate":"Reja de Cobre Expuesta","Exposed Copper Lantern":"Linterna de Cobre Expuesta","Exposed Copper Trapdoor":"Trampilla de Cobre Expuesta","Exposed Lightning Rod":"Pararrayos Expuesto",
};

/* ── Block Data (deduplicated, no placeholders) ─────────────── */
const categoriesData = {
  nuevos: [
    { name: 'Cinnabar', tags: ['new'] }, { name: 'Cinnabar Slab', tags: ['new','base'] },
    { name: 'Cinnabar Stairs', tags: ['new','base'] }, { name: 'Cinnabar Wall', tags: ['new','base'] },
    { name: 'Polished Cinnabar', tags: ['new'] }, { name: 'Polished Cinnabar Slab', tags: ['new','base'] },
    { name: 'Polished Cinnabar Stairs', tags: ['new','base'] }, { name: 'Polished Cinnabar Wall', tags: ['new','base'] },
    { name: 'Cinnabar Bricks', tags: ['new'] }, { name: 'Cinnabar Brick Slab', tags: ['new','base'] },
    { name: 'Cinnabar Brick Stairs', tags: ['new','base'] }, { name: 'Cinnabar Brick Wall', tags: ['new','base'] },
    { name: 'Chiseled Cinnabar', tags: ['new'] },
    { name: 'Sulfur', tags: ['new'] }, { name: 'Sulfur Slab', tags: ['new','base'] },
    { name: 'Sulfur Stairs', tags: ['new','base'] }, { name: 'Sulfur Wall', tags: ['new','base'] },
    { name: 'Polished Sulfur', tags: ['new'] }, { name: 'Polished Sulfur Slab', tags: ['new','base'] },
    { name: 'Polished Sulfur Stairs', tags: ['new','base'] }, { name: 'Polished Sulfur Wall', tags: ['new','base'] },
    { name: 'Sulfur Bricks', tags: ['new'] }, { name: 'Sulfur Brick Slab', tags: ['new','base'] },
    { name: 'Sulfur Brick Stairs', tags: ['new','base'] }, { name: 'Sulfur Brick Wall', tags: ['new','base'] },
    { name: 'Chiseled Sulfur', tags: ['new'] },
    { name: 'Potent Sulfur', tags: ['new'] }, { name: 'Sulfur Spike', tags: ['new'] },
    { name: 'Cinnabar Ore', tags: ['new'] }, { name: 'Sulfur Ore', tags: ['new'] },
    { name: 'Raw Cinnabar Block', tags: ['new'] }, { name: 'Raw Sulfur Block', tags: ['new'] },
  ],
  construccion: [
    { name: 'Andesite', tags: ['base'] }, { name: 'Polished Andesite', tags: ['base'] }, { name: 'Andesite Slab', tags: ['base'] },
    { name: 'Andesite Stairs', tags: ['base'] }, { name: 'Andesite Wall', tags: ['base'] },
    { name: 'Basalt', tags: ['base'] }, { name: 'Polished Basalt', tags: ['base'] }, { name: 'Smooth Basalt', tags: ['base'] },
    { name: 'Basalt Slab', tags: ['base'] }, { name: 'Basalt Stairs', tags: ['base'] }, { name: 'Basalt Wall', tags: ['base'] },
    { name: 'Blackstone', tags: ['nether','base'] }, { name: 'Polished Blackstone', tags: ['nether','base'] },
    { name: 'Blackstone Slab', tags: ['nether','base'] }, { name: 'Blackstone Stairs', tags: ['nether','base'] }, { name: 'Blackstone Wall', tags: ['nether','base'] },
    { name: 'Polished Blackstone Bricks', tags: ['nether','base'] }, { name: 'Cracked Polished Blackstone Bricks', tags: ['nether','base'] },
    { name: 'Gilded Blackstone', tags: ['nether','base'] },
    { name: 'Bricks', tags: ['base'] }, { name: 'Brick Slab', tags: ['base'] }, { name: 'Brick Stairs', tags: ['base'] }, { name: 'Brick Wall', tags: ['base'] },
    { name: 'Cobbled Deepslate', tags: ['base'] }, { name: 'Cobbled Deepslate Slab', tags: ['base'] }, { name: 'Cobbled Deepslate Stairs', tags: ['base'] }, { name: 'Cobbled Deepslate Wall', tags: ['base'] },
    { name: 'Cobblestone', tags: ['base'] }, { name: 'Cobblestone Slab', tags: ['base'] }, { name: 'Cobblestone Stairs', tags: ['base'] }, { name: 'Cobblestone Wall', tags: ['base'] },
    { name: 'Cracked Deepslate Bricks', tags: ['base'] }, { name: 'Cracked Stone Bricks', tags: ['base'] },
    { name: 'Cracked Nether Bricks', tags: ['nether','base'] }, { name: 'Red Nether Bricks', tags: ['nether','base'] },
    { name: 'Cut Sandstone', tags: ['base'] }, { name: 'Cut Red Sandstone', tags: ['base'] },
    { name: 'Cut Sandstone Slab', tags: ['base'] }, { name: 'Cut Red Sandstone Slab', tags: ['base'] },
    { name: 'Deepslate', tags: ['base'] }, { name: 'Polished Deepslate', tags: ['base'] },
    { name: 'Deepslate Slab', tags: ['base'] }, { name: 'Deepslate Stairs', tags: ['base'] }, { name: 'Deepslate Wall', tags: ['base'] },
    { name: 'Deepslate Bricks', tags: ['base'] }, { name: 'Deepslate Brick Slab', tags: ['base'] },
    { name: 'Deepslate Brick Stairs', tags: ['base'] }, { name: 'Deepslate Brick Wall', tags: ['base'] },
    { name: 'Deepslate Tiles', tags: ['base'] }, { name: 'Deepslate Tile Slab', tags: ['base'] },
    { name: 'Deepslate Tile Stairs', tags: ['base'] }, { name: 'Deepslate Tile Wall', tags: ['base'] },
    { name: 'Diorite', tags: ['base'] }, { name: 'Polished Diorite', tags: ['base'] },
    { name: 'Diorite Slab', tags: ['base'] }, { name: 'Diorite Stairs', tags: ['base'] }, { name: 'Diorite Wall', tags: ['base'] },
    { name: 'Dripstone Block', tags: ['base'] }, { name: 'Pointed Dripstone', tags: ['base'] },
    { name: 'End Stone', tags: ['end','base'] }, { name: 'End Stone Bricks', tags: ['end','base'] },
    { name: 'End Stone Brick Slab', tags: ['end','base'] }, { name: 'End Stone Brick Stairs', tags: ['end','base'] },
    { name: 'End Stone Brick Wall', tags: ['end','base'] },
    { name: 'Granite', tags: ['base'] }, { name: 'Polished Granite', tags: ['base'] },
    { name: 'Granite Slab', tags: ['base'] }, { name: 'Granite Stairs', tags: ['base'] }, { name: 'Granite Wall', tags: ['base'] },
    { name: 'Mossy Cobblestone', tags: ['base'] }, { name: 'Mossy Cobblestone Slab', tags: ['base'] },
    { name: 'Mossy Cobblestone Stairs', tags: ['base'] }, { name: 'Mossy Cobblestone Wall', tags: ['base'] },
    { name: 'Mossy Stone Brick Slab', tags: ['base'] }, { name: 'Moss Block', tags: ['base'] }, { name: 'Moss Carpet', tags: ['base'] },
    { name: 'Nether Bricks', tags: ['nether','base'] }, { name: 'Chiseled Nether Bricks', tags: ['nether','base'] },
    { name: 'Sandstone', tags: ['base'] }, { name: 'Cut Sandstone', tags: ['base'] }, { name: 'Smooth Sandstone', tags: ['base'] },
    { name: 'Sandstone Slab', tags: ['base'] }, { name: 'Sandstone Stairs', tags: ['base'] }, { name: 'Sandstone Wall', tags: ['base'] },
    { name: 'Red Sandstone', tags: ['base'] }, { name: 'Cut Red Sandstone', tags: ['base'] }, { name: 'Smooth Red Sandstone', tags: ['base'] },
    { name: 'Red Sandstone Slab', tags: ['base'] }, { name: 'Red Sandstone Stairs', tags: ['base'] }, { name: 'Red Sandstone Wall', tags: ['base'] },
    { name: 'Stone', tags: ['base'] }, { name: 'Smooth Stone', tags: ['base'] },
    { name: 'Stone Bricks', tags: ['base'] }, { name: 'Cracked Stone Bricks', tags: ['base'] }, { name: 'Mossy Stone Bricks', tags: ['base'] },
    { name: 'Chiseled Stone Bricks', tags: ['base'] }, { name: 'Stone Slab', tags: ['base'] },
    { name: 'Stone Stairs', tags: ['base'] }, { name: 'Stone Wall', tags: ['base'] },
    { name: 'Infested Stone', tags: ['base'] }, { name: 'Infested Cobblestone', tags: ['base'] },
    { name: 'Infested Stone Bricks', tags: ['base'] }, { name: 'Infested Cracked Stone Bricks', tags: ['base'] },
    { name: 'Infested Mossy Stone Bricks', tags: ['base'] }, { name: 'Infested Chiseled Stone Bricks', tags: ['base'] },
    { name: 'Infested Deepslate', tags: ['base'] },
    { name: 'Tuff', tags: ['base'] }, { name: 'Polished Tuff', tags: ['base'] }, { name: 'Tuff Slab', tags: ['base'] },
    { name: 'Tuff Stairs', tags: ['base'] }, { name: 'Tuff Wall', tags: ['base'] },
    { name: 'Tuff Bricks', tags: ['base'] }, { name: 'Chiseled Tuff', tags: ['base'] }, { name: 'Chiseled Tuff Bricks', tags: ['base'] },
    { name: 'Calcite', tags: ['base'] }, { name: 'Resin Bricks', tags: ['base'] }, { name: 'Resin Brick Slab', tags: ['base'] },
    { name: 'Resin Brick Stairs', tags: ['base'] }, { name: 'Resin Brick Wall', tags: ['base'] },
    { name: 'Chiseled Resin Bricks', tags: ['base'] }, { name: 'Resin Clump', tags: ['base'] },
  ],
  madera: [
    { name: 'Acacia Log', tags: ['base'] }, { name: 'Stripped Acacia Log', tags: ['base'] },
    { name: 'Stripped Acacia Wood', tags: ['base'] }, { name: 'Acacia Wood', tags: ['base'] }, { name: 'Acacia Planks', tags: ['base'] },
    { name: 'Acacia Slab', tags: ['base'] }, { name: 'Acacia Stairs', tags: ['base'] }, { name: 'Acacia Fence', tags: ['base'] },
    { name: 'Acacia Fence Gate', tags: ['base'] }, { name: 'Acacia Door', tags: ['base'] }, { name: 'Acacia Trapdoor', tags: ['base'] },
    { name: 'Acacia Pressure Plate', tags: ['base'] }, { name: 'Acacia Button', tags: ['base'] },
    { name: 'Acacia Sign', tags: ['base'] }, { name: 'Acacia Hanging Sign', tags: ['base'] },
    { name: 'Acacia Wall Sign', tags: ['base'] }, { name: 'Acacia Wall Hanging Sign', tags: ['base'] },
    { name: 'Acacia Shelf', tags: ['base'] }, { name: 'Acacia Sapling', tags: ['base'] }, { name: 'Acacia Leaves', tags: ['base'] },
    { name: 'Birch Log', tags: ['base'] }, { name: 'Stripped Birch Log', tags: ['base'] }, { name: 'Stripped Birch Wood', tags: ['base'] },
    { name: 'Birch Wood', tags: ['base'] }, { name: 'Birch Planks', tags: ['base'] }, { name: 'Birch Slab', tags: ['base'] },
    { name: 'Birch Stairs', tags: ['base'] }, { name: 'Birch Fence', tags: ['base'] }, { name: 'Birch Fence Gate', tags: ['base'] },
    { name: 'Birch Door', tags: ['base'] }, { name: 'Birch Trapdoor', tags: ['base'] }, { name: 'Birch Pressure Plate', tags: ['base'] },
    { name: 'Birch Button', tags: ['base'] }, { name: 'Birch Sign', tags: ['base'] }, { name: 'Birch Hanging Sign', tags: ['base'] },
    { name: 'Birch Wall Sign', tags: ['base'] }, { name: 'Birch Wall Hanging Sign', tags: ['base'] }, { name: 'Birch Shelf', tags: ['base'] },
    { name: 'Birch Sapling', tags: ['base'] }, { name: 'Birch Leaves', tags: ['base'] },
    { name: 'Cherry Log', tags: ['base'] }, { name: 'Stripped Cherry Log', tags: ['base'] }, { name: 'Stripped Cherry Wood', tags: ['base'] },
    { name: 'Cherry Wood', tags: ['base'] }, { name: 'Cherry Planks', tags: ['base'] }, { name: 'Cherry Slab', tags: ['base'] },
    { name: 'Cherry Stairs', tags: ['base'] }, { name: 'Cherry Fence', tags: ['base'] }, { name: 'Cherry Fence Gate', tags: ['base'] },
    { name: 'Cherry Door', tags: ['base'] }, { name: 'Cherry Trapdoor', tags: ['base'] }, { name: 'Cherry Pressure Plate', tags: ['base'] },
    { name: 'Cherry Button', tags: ['base'] }, { name: 'Cherry Sign', tags: ['base'] }, { name: 'Cherry Hanging Sign', tags: ['base'] },
    { name: 'Cherry Wall Sign', tags: ['base'] }, { name: 'Cherry Wall Hanging Sign', tags: ['base'] }, { name: 'Cherry Shelf', tags: ['base'] },
    { name: 'Cherry Sapling', tags: ['base'] }, { name: 'Cherry Leaves', tags: ['base'] },
    { name: 'Dark Oak Log', tags: ['base'] }, { name: 'Stripped Dark Oak Log', tags: ['base'] }, { name: 'Stripped Dark Oak Wood', tags: ['base'] },
    { name: 'Dark Oak Wood', tags: ['base'] }, { name: 'Dark Oak Planks', tags: ['base'] }, { name: 'Dark Oak Slab', tags: ['base'] },
    { name: 'Dark Oak Stairs', tags: ['base'] }, { name: 'Dark Oak Fence', tags: ['base'] }, { name: 'Dark Oak Fence Gate', tags: ['base'] },
    { name: 'Dark Oak Door', tags: ['base'] }, { name: 'Dark Oak Trapdoor', tags: ['base'] }, { name: 'Dark Oak Pressure Plate', tags: ['base'] },
    { name: 'Dark Oak Button', tags: ['base'] }, { name: 'Dark Oak Sign', tags: ['base'] }, { name: 'Dark Oak Hanging Sign', tags: ['base'] },
    { name: 'Dark Oak Wall Sign', tags: ['base'] }, { name: 'Dark Oak Wall Hanging Sign', tags: ['base'] }, { name: 'Dark Oak Shelf', tags: ['base'] },
    { name: 'Dark Oak Sapling', tags: ['base'] }, { name: 'Dark Oak Leaves', tags: ['base'] },
    { name: 'Jungle Log', tags: ['base'] }, { name: 'Stripped Jungle Log', tags: ['base'] }, { name: 'Stripped Jungle Wood', tags: ['base'] },
    { name: 'Jungle Wood', tags: ['base'] }, { name: 'Jungle Planks', tags: ['base'] }, { name: 'Jungle Slab', tags: ['base'] },
    { name: 'Jungle Stairs', tags: ['base'] }, { name: 'Jungle Fence', tags: ['base'] }, { name: 'Jungle Fence Gate', tags: ['base'] },
    { name: 'Jungle Door', tags: ['base'] }, { name: 'Jungle Trapdoor', tags: ['base'] }, { name: 'Jungle Pressure Plate', tags: ['base'] },
    { name: 'Jungle Button', tags: ['base'] }, { name: 'Jungle Sign', tags: ['base'] }, { name: 'Jungle Hanging Sign', tags: ['base'] },
    { name: 'Jungle Wall Sign', tags: ['base'] }, { name: 'Jungle Wall Hanging Sign', tags: ['base'] }, { name: 'Jungle Shelf', tags: ['base'] },
    { name: 'Jungle Sapling', tags: ['base'] }, { name: 'Jungle Leaves', tags: ['base'] },
    { name: 'Mangrove Log', tags: ['base'] }, { name: 'Stripped Mangrove Log', tags: ['base'] }, { name: 'Stripped Mangrove Wood', tags: ['base'] },
    { name: 'Mangrove Wood', tags: ['base'] }, { name: 'Mangrove Planks', tags: ['base'] }, { name: 'Mangrove Slab', tags: ['base'] },
    { name: 'Mangrove Stairs', tags: ['base'] }, { name: 'Mangrove Fence', tags: ['base'] }, { name: 'Mangrove Fence Gate', tags: ['base'] },
    { name: 'Mangrove Door', tags: ['base'] }, { name: 'Mangrove Trapdoor', tags: ['base'] }, { name: 'Mangrove Pressure Plate', tags: ['base'] },
    { name: 'Mangrove Button', tags: ['base'] }, { name: 'Mangrove Sign', tags: ['base'] }, { name: 'Mangrove Hanging Sign', tags: ['base'] },
    { name: 'Mangrove Wall Sign', tags: ['base'] }, { name: 'Mangrove Wall Hanging Sign', tags: ['base'] }, { name: 'Mangrove Shelf', tags: ['base'] },
    { name: 'Mangrove Propagule', tags: ['base'] }, { name: 'Mangrove Roots', tags: ['base'] }, { name: 'Mangrove Leaves', tags: ['base'] },
    { name: 'Oak Log', tags: ['base'] }, { name: 'Stripped Oak Log', tags: ['base'] }, { name: 'Stripped Oak Wood', tags: ['base'] },
    { name: 'Oak Wood', tags: ['base'] }, { name: 'Oak Planks', tags: ['base'] }, { name: 'Oak Slab', tags: ['base'] },
    { name: 'Oak Stairs', tags: ['base'] }, { name: 'Oak Fence', tags: ['base'] }, { name: 'Oak Fence Gate', tags: ['base'] },
    { name: 'Oak Door', tags: ['base'] }, { name: 'Oak Trapdoor', tags: ['base'] }, { name: 'Oak Pressure Plate', tags: ['base'] },
    { name: 'Oak Button', tags: ['base'] }, { name: 'Oak Sign', tags: ['base'] }, { name: 'Oak Hanging Sign', tags: ['base'] },
    { name: 'Oak Wall Sign', tags: ['base'] }, { name: 'Oak Wall Hanging Sign', tags: ['base'] }, { name: 'Oak Shelf', tags: ['base'] },
    { name: 'Oak Sapling', tags: ['base'] }, { name: 'Oak Leaves', tags: ['base'] },
    { name: 'Spruce Log', tags: ['base'] }, { name: 'Stripped Spruce Log', tags: ['base'] }, { name: 'Stripped Spruce Wood', tags: ['base'] },
    { name: 'Spruce Wood', tags: ['base'] }, { name: 'Spruce Planks', tags: ['base'] }, { name: 'Spruce Slab', tags: ['base'] },
    { name: 'Spruce Stairs', tags: ['base'] }, { name: 'Spruce Fence', tags: ['base'] }, { name: 'Spruce Fence Gate', tags: ['base'] },
    { name: 'Spruce Door', tags: ['base'] }, { name: 'Spruce Trapdoor', tags: ['base'] }, { name: 'Spruce Pressure Plate', tags: ['base'] },
    { name: 'Spruce Button', tags: ['base'] }, { name: 'Spruce Sign', tags: ['base'] }, { name: 'Spruce Hanging Sign', tags: ['base'] },
    { name: 'Spruce Wall Sign', tags: ['base'] }, { name: 'Spruce Wall Hanging Sign', tags: ['base'] }, { name: 'Spruce Shelf', tags: ['base'] },
    { name: 'Spruce Sapling', tags: ['base'] }, { name: 'Spruce Leaves', tags: ['base'] },
    { name: 'Bamboo', tags: ['base'] }, { name: 'Bamboo Block', tags: ['base'] }, { name: 'Bamboo Planks', tags: ['base'] },
    { name: 'Bamboo Slab', tags: ['base'] }, { name: 'Bamboo Stairs', tags: ['base'] }, { name: 'Bamboo Fence', tags: ['base'] },
    { name: 'Bamboo Fence Gate', tags: ['base'] }, { name: 'Bamboo Door', tags: ['base'] }, { name: 'Bamboo Trapdoor', tags: ['base'] },
    { name: 'Bamboo Pressure Plate', tags: ['base'] }, { name: 'Bamboo Button', tags: ['base'] },
    { name: 'Bamboo Sign', tags: ['base'] }, { name: 'Bamboo Hanging Sign', tags: ['base'] },
    { name: 'Bamboo Wall Sign', tags: ['base'] }, { name: 'Bamboo Wall Hanging Sign', tags: ['base'] }, { name: 'Bamboo Shelf', tags: ['base'] },
    { name: 'Bamboo Shoot', tags: ['base'] }, { name: 'Bamboo Mosaic', tags: ['base'] },
    { name: 'Bamboo Mosaic Slab', tags: ['base'] }, { name: 'Bamboo Mosaic Stairs', tags: ['base'] },
    { name: 'Crimson Planks', tags: ['nether','base'] }, { name: 'Crimson Stem', tags: ['nether','base'] }, { name: 'Stripped Crimson Stem', tags: ['nether','base'] },
    { name: 'Crimson Hyphae', tags: ['nether','base'] }, { name: 'Crimson Nylium', tags: ['nether','base'] },
    { name: 'Crimson Roots', tags: ['nether','base'] }, { name: 'Crimson Fungus', tags: ['nether','base'] },
    { name: 'Crimson Slab', tags: ['nether','base'] }, { name: 'Crimson Stairs', tags: ['nether','base'] }, { name: 'Crimson Fence', tags: ['nether','base'] },
    { name: 'Crimson Fence Gate', tags: ['nether','base'] }, { name: 'Crimson Door', tags: ['nether','base'] }, { name: 'Crimson Trapdoor', tags: ['nether','base'] },
    { name: 'Crimson Pressure Plate', tags: ['nether','base'] }, { name: 'Crimson Button', tags: ['nether','base'] },
    { name: 'Crimson Sign', tags: ['nether','base'] }, { name: 'Crimson Hanging Sign', tags: ['nether','base'] },
    { name: 'Crimson Shelf', tags: ['nether','base'] }, { name: 'Crimson Wall Sign', tags: ['nether','base'] },
    { name: 'Crimson Wall Hanging Sign', tags: ['nether','base'] },
    { name: 'Warped Planks', tags: ['nether','base'] }, { name: 'Warped Stem', tags: ['nether','base'] }, { name: 'Stripped Warped Stem', tags: ['nether','base'] },
    { name: 'Warped Hyphae', tags: ['nether','base'] }, { name: 'Warped Nylium', tags: ['nether','base'] },
    { name: 'Warped Roots', tags: ['nether','base'] }, { name: 'Warped Fungus', tags: ['nether','base'] },
    { name: 'Warped Wart Block', tags: ['nether','base'] }, { name: 'Warped Slab', tags: ['nether','base'] }, { name: 'Warped Stairs', tags: ['nether','base'] },
    { name: 'Warped Fence', tags: ['nether','base'] }, { name: 'Warped Fence Gate', tags: ['nether','base'] },
    { name: 'Warped Door', tags: ['nether','base'] }, { name: 'Warped Trapdoor', tags: ['nether','base'] },
    { name: 'Warped Pressure Plate', tags: ['nether','base'] }, { name: 'Warped Button', tags: ['nether','base'] },
    { name: 'Warped Sign', tags: ['nether','base'] }, { name: 'Warped Hanging Sign', tags: ['nether','base'] },
    { name: 'Warped Shelf', tags: ['nether','base'] }, { name: 'Warped Wall Sign', tags: ['nether','base'] },
    { name: 'Warped Wall Hanging Sign', tags: ['nether','base'] },
  ],
  naturaleza: [
    { name: 'Allium', tags: ['base'] }, { name: 'Azalea', tags: ['base'] }, { name: 'Azalea Leaves', tags: ['base'] },
    { name: 'Flowering Azalea', tags: ['base'] }, { name: 'Flowering Azalea Leaves', tags: ['base'] },
    { name: 'Azure Bluet', tags: ['base'] }, { name: 'Bush', tags: ['base'] }, { name: 'Cornflower', tags: ['base'] },
    { name: 'Dandelion', tags: ['base'] }, { name: 'Lily of the Valley', tags: ['base'] }, { name: 'Lilac', tags: ['base'] },
    { name: 'Poppy', tags: ['base'] }, { name: 'Oxeye Daisy', tags: ['base'] }, { name: 'Blue Orchid', tags: ['base'] },
    { name: 'Pink Tulip', tags: ['base'] }, { name: 'Orange Tulip', tags: ['base'] }, { name: 'White Tulip', tags: ['base'] },
    { name: 'Red Tulip', tags: ['base'] }, { name: 'Wither Rose', tags: ['base'] }, { name: 'Cactus', tags: ['base'] },
    { name: 'Cactus Flower', tags: ['base'] }, { name: 'Grass Block', tags: ['base'] }, { name: 'Dirt', tags: ['base'] },
    { name: 'Coarse Dirt', tags: ['base'] }, { name: 'Dirt Path', tags: ['base'] }, { name: 'Farmland', tags: ['base'] },
    { name: 'Gravel', tags: ['base'] }, { name: 'Sand', tags: ['base'] }, { name: 'Red Sand', tags: ['base'] },
    { name: 'Clay', tags: ['base'] }, { name: 'Snow', tags: ['base'] }, { name: 'Snow Block', tags: ['base'] },
    { name: 'Ice', tags: ['base'] }, { name: 'Blue Ice', tags: ['base'] }, { name: 'Packed Ice', tags: ['base'] },
    { name: 'Melon', tags: ['base'] }, { name: 'Attached Melon Stem', tags: ['base'] }, { name: 'Melon Stem', tags: ['base'] },
    { name: 'Pumpkin', tags: ['base'] }, { name: 'Attached Pumpkin Stem', tags: ['base'] }, { name: 'Pumpkin Stem', tags: ['base'] },
    { name: 'Carved Pumpkin', tags: ['base'] }, { name: 'Jack o\'Lantern', tags: ['base'] },
    { name: 'Beetroots', tags: ['base'] }, { name: 'Carrots', tags: ['base'] }, { name: 'Potatoes', tags: ['base'] },
    { name: 'Wheat', tags: ['base'] }, { name: 'Cocoa', tags: ['base'] }, { name: 'Kelp', tags: ['base'] },
    { name: 'Kelp Plant', tags: ['base'] }, { name: 'Dried Kelp Block', tags: ['base'] }, { name: 'Seagrass', tags: ['base'] },
    { name: 'Tall Seagrass', tags: ['base'] }, { name: 'Sea Pickle', tags: ['base'] }, { name: 'Bamboo Shoot', tags: ['base'] },
    { name: 'Firefly Bush', tags: ['base'] }, { name: 'Closed Eyeblossom', tags: ['base'] },
    { name: 'Big Dripleaf', tags: ['base'] }, { name: 'Big Dripleaf Stem', tags: ['base'] }, { name: 'Small Dripleaf', tags: ['base'] },
    { name: 'Spore Blossom', tags: ['base'] },
    { name: 'Pink Petals', tags: ['base'] }, { name: 'Spore Blossom', tags: ['base'] }, { name: 'Torchflower', tags: ['base'] },
    { name: 'Pitcher Plant', tags: ['base'] }, { name: 'Torchflower Seeds', tags: ['base'] },
    { name: 'Brown Mushroom Block', tags: ['base'] }, { name: 'Red Mushroom Block', tags: ['base'] },
    { name: 'Mushroom Stem', tags: ['base'] }, { name: 'Mycelium', tags: ['base'] },
    { name: 'Podzol', tags: ['base'] }, { name: 'Rooted Dirt', tags: ['base'] },
    { name: 'Azalea', tags: ['base'] }, { name: 'Flowering Azalea', tags: ['base'] },
 { name: 'Moss Block', tags: ['base'] }, { name: 'Moss Carpet', tags: ['base'] },
    { name: 'Hanging Roots', tags: ['base'] }, { name: 'Leaf Litter', tags: ['base'] }, { name: 'Glow Lichen', tags: ['base'] },
    { name: 'Cave Vines', tags: ['base'] }, { name: 'Cave Vines Plant', tags: ['base'] },
    { name: 'Brain Coral', tags: ['base'] }, { name: 'Brain Coral Block', tags: ['base'] }, { name: 'Brain Coral Fan', tags: ['base'] },
    { name: 'Brain Coral Wall Fan', tags: ['base'] }, { name: 'Dead Brain Coral Block', tags: ['base'] },
    { name: 'Dead Brain Coral Fan', tags: ['base'] }, { name: 'Dead Brain Coral Wall Fan', tags: ['base'] },
    { name: 'Bubble Coral', tags: ['base'] }, { name: 'Bubble Coral Block', tags: ['base'] }, { name: 'Bubble Coral Fan', tags: ['base'] },
    { name: 'Bubble Coral Wall Fan', tags: ['base'] }, { name: 'Dead Bubble Coral Block', tags: ['base'] },
    { name: 'Dead Bubble Coral Fan', tags: ['base'] }, { name: 'Dead Bubble Coral Wall Fan', tags: ['base'] },
    { name: 'Fire Coral', tags: ['base'] }, { name: 'Fire Coral Block', tags: ['base'] }, { name: 'Fire Coral Fan', tags: ['base'] },
    { name: 'Fire Coral Wall Fan', tags: ['base'] }, { name: 'Dead Fire Coral Block', tags: ['base'] },
    { name: 'Dead Fire Coral Fan', tags: ['base'] }, { name: 'Dead Fire Coral Wall Fan', tags: ['base'] },
    { name: 'Horn Coral', tags: ['base'] }, { name: 'Horn Coral Block', tags: ['base'] }, { name: 'Horn Coral Fan', tags: ['base'] },
    { name: 'Horn Coral Wall Fan', tags: ['base'] }, { name: 'Dead Horn Coral Block', tags: ['base'] },
    { name: 'Dead Horn Coral Fan', tags: ['base'] }, { name: 'Dead Horn Coral Wall Fan', tags: ['base'] },
    { name: 'Tube Coral', tags: ['base'] }, { name: 'Tube Coral Block', tags: ['base'] }, { name: 'Tube Coral Fan', tags: ['base'] },
    { name: 'Tube Coral Wall Fan', tags: ['base'] }, { name: 'Dead Tube Coral Block', tags: ['base'] },
    { name: 'Dead Tube Coral Fan', tags: ['base'] }, { name: 'Dead Tube Coral Wall Fan', tags: ['base'] },
    { name: 'Frogspawn', tags: ['base'] }, { name: 'Mangrove Propagule', tags: ['base'] }, { name: 'Mangrove Roots', tags: ['base'] },
    { name: 'Mangrove Leaves', tags: ['base'] }, { name: 'Dead Bush', tags: ['base'] }, { name: 'Fern', tags: ['base'] },
    { name: 'Large Fern', tags: ['base'] }, { name: 'Crimson Fungus', tags: ['nether','base'] }, { name: 'Crimson Roots', tags: ['nether','base'] },
    { name: 'Crimson Nylium', tags: ['nether','base'] }, { name: 'Warped Fungus', tags: ['nether','base'] },
    { name: 'Warped Nylium', tags: ['nether','base'] }, { name: 'Warped Roots', tags: ['nether','base'] },
    { name: 'Warped Wart Block', tags: ['nether','base'] }, { name: 'Shroomlight', tags: ['nether','base'] },
    { name: 'Nether Wart Block', tags: ['nether','base'] }, { name: 'Bone Block', tags: ['nether','base'] },
  ],
  ores: [
    { name: 'Coal Ore', tags: ['base'] }, { name: 'Deepslate Coal Ore', tags: ['base'] },
    { name: 'Iron Ore', tags: ['base'] }, { name: 'Deepslate Iron Ore', tags: ['base'] },
    { name: 'Copper Ore', tags: ['base'] }, { name: 'Deepslate Copper Ore', tags: ['base'] },
    { name: 'Copper Block', tags: ['base'] }, { name: 'Cut Copper', tags: ['base'] }, { name: 'Cut Copper Slab', tags: ['base'] },
    { name: 'Cut Copper Stairs', tags: ['base'] }, { name: 'Exposed Cut Copper', tags: ['base'] },
    { name: 'Exposed Cut Copper Slab', tags: ['base'] }, { name: 'Exposed Cut Copper Stairs', tags: ['base'] },
    { name: 'Oxidized Copper', tags: ['base'] }, { name: 'Oxidized Cut Copper', tags: ['base'] },
    { name: 'Oxidized Cut Copper Slab', tags: ['base'] }, { name: 'Oxidized Cut Copper Stairs', tags: ['base'] },
    { name: 'Weathered Copper', tags: ['base'] }, { name: 'Weathered Cut Copper', tags: ['base'] },
    { name: 'Weathered Cut Copper Slab', tags: ['base'] }, { name: 'Weathered Cut Copper Stairs', tags: ['base'] },
    { name: 'Copper Bulb', tags: ['base'] }, { name: 'Exposed Copper Bulb', tags: ['base'] }, { name: 'Weathered Copper Bulb', tags: ['base'] },
    { name: 'Oxidized Copper Bulb', tags: ['base'] }, { name: 'Copper Grate', tags: ['base'] }, { name: 'Copper Door', tags: ['base'] },
    { name: 'Copper Trapdoor', tags: ['base'] }, { name: 'Copper Chain', tags: ['base'] }, { name: 'Copper Bars', tags: ['base'] },
    { name: 'Copper Torch', tags: ['base'] }, { name: 'Copper Wall Torch', tags: ['base'] }, { name: 'Copper Lantern', tags: ['base'] },
    { name: 'Copper Chest', tags: ['base'] }, { name: 'Copper Golem Statue', tags: ['base'] }, { name: 'Copper Ore', tags: ['base'] },
    { name: 'Gold Ore', tags: ['base'] }, { name: 'Deepslate Gold Ore', tags: ['base'] }, { name: 'Nether Gold Ore', tags: ['nether','base'] },
    { name: 'Gold Block', tags: ['base'] }, { name: 'Raw Gold Block', tags: ['base'] },
    { name: 'Diamond Ore', tags: ['base'] }, { name: 'Deepslate Diamond Ore', tags: ['base'] },
    { name: 'Diamond Block', tags: ['base'] }, { name: 'Emerald Ore', tags: ['base'] }, { name: 'Deepslate Emerald Ore', tags: ['base'] },
    { name: 'Emerald Block', tags: ['base'] }, { name: 'Lapis Ore', tags: ['base'] }, { name: 'Deepslate Lapis Ore', tags: ['base'] },
    { name: 'Lapis Block', tags: ['base'] }, { name: 'Redstone Ore', tags: ['base'] }, { name: 'Deepslate Redstone Ore', tags: ['base'] },
    { name: 'Redstone Block', tags: ['base'] }, { name: 'Nether Quartz Ore', tags: ['nether','base'] },
    { name: 'Quartz Block', tags: ['base'] }, { name: 'Quartz Bricks', tags: ['base'] }, { name: 'Quartz Slab', tags: ['base'] },
    { name: 'Quartz Stairs', tags: ['base'] }, { name: 'Quartz Wall', tags: ['base'] }, { name: 'Smooth Quartz', tags: ['base'] },
    { name: 'Chiseled Quartz Block', tags: ['base'] }, { name: 'Amethyst Block', tags: ['base'] },
    { name: 'Amethyst Cluster', tags: ['base'] }, { name: 'Budding Amethyst', tags: ['base'] },
    { name: 'Small Amethyst Bud', tags: ['base'] }, { name: 'Medium Amethyst Bud', tags: ['base'] }, { name: 'Large Amethyst Bud', tags: ['base'] },
    { name: 'Block of Amethyst', tags: ['base'] }, { name: 'Ancient Debris', tags: ['nether','base'] }, { name: 'Netherite Block', tags: ['base'] },
    { name: 'Netherite Ore', tags: ['base'] }, { name: 'Block of Coal', tags: ['base'] }, { name: 'Block of Iron', tags: ['base'] },
  ],
  decoracion: [
    { name: 'Glass', tags: ['base'] }, { name: 'Glass Pane', tags: ['base'] },
    { name: 'Black Stained Glass', tags: ['base'] }, { name: 'Black Stained Glass Pane', tags: ['base'] },
    { name: 'Blue Stained Glass', tags: ['base'] }, { name: 'Blue Stained Glass Pane', tags: ['base'] },
    { name: 'Brown Stained Glass', tags: ['base'] }, { name: 'Brown Stained Glass Pane', tags: ['base'] },
    { name: 'Cyan Stained Glass', tags: ['base'] }, { name: 'Cyan Stained Glass Pane', tags: ['base'] },
    { name: 'Gray Stained Glass', tags: ['base'] }, { name: 'Gray Stained Glass Pane', tags: ['base'] },
    { name: 'Green Stained Glass', tags: ['base'] }, { name: 'Green Stained Glass Pane', tags: ['base'] },
    { name: 'Light Blue Stained Glass', tags: ['base'] }, { name: 'Light Blue Stained Glass Pane', tags: ['base'] },
    { name: 'Light Gray Stained Glass', tags: ['base'] }, { name: 'Light Gray Stained Glass Pane', tags: ['base'] },
    { name: 'Lime Stained Glass', tags: ['base'] }, { name: 'Lime Stained Glass Pane', tags: ['base'] },
    { name: 'Magenta Stained Glass', tags: ['base'] }, { name: 'Magenta Stained Glass Pane', tags: ['base'] },
    { name: 'Orange Stained Glass', tags: ['base'] }, { name: 'Orange Stained Glass Pane', tags: ['base'] },
    { name: 'Pink Stained Glass', tags: ['base'] }, { name: 'Pink Stained Glass Pane', tags: ['base'] },
    { name: 'Purple Stained Glass', tags: ['base'] }, { name: 'Purple Stained Glass Pane', tags: ['base'] },
    { name: 'Red Stained Glass', tags: ['base'] }, { name: 'Red Stained Glass Pane', tags: ['base'] },
    { name: 'White Stained Glass', tags: ['base'] }, { name: 'White Stained Glass Pane', tags: ['base'] },
    { name: 'Yellow Stained Glass', tags: ['base'] }, { name: 'Yellow Stained Glass Pane', tags: ['base'] },
    { name: 'Black Concrete', tags: ['base'] }, { name: 'Black Concrete Powder', tags: ['base'] },
    { name: 'Blue Concrete', tags: ['base'] }, { name: 'Blue Concrete Powder', tags: ['base'] },
    { name: 'Brown Concrete', tags: ['base'] }, { name: 'Brown Concrete Powder', tags: ['base'] },
    { name: 'Cyan Concrete', tags: ['base'] }, { name: 'Cyan Concrete Powder', tags: ['base'] },
    { name: 'Gray Concrete', tags: ['base'] }, { name: 'Gray Concrete Powder', tags: ['base'] },
    { name: 'Green Concrete', tags: ['base'] }, { name: 'Green Concrete Powder', tags: ['base'] },
    { name: 'Light Blue Concrete', tags: ['base'] }, { name: 'Light Blue Concrete Powder', tags: ['base'] },
    { name: 'Light Gray Concrete', tags: ['base'] }, { name: 'Light Gray Concrete Powder', tags: ['base'] },
    { name: 'Lime Concrete', tags: ['base'] }, { name: 'Lime Concrete Powder', tags: ['base'] },
    { name: 'Magenta Concrete', tags: ['base'] }, { name: 'Magenta Concrete Powder', tags: ['base'] },
    { name: 'Orange Concrete', tags: ['base'] }, { name: 'Orange Concrete Powder', tags: ['base'] },
    { name: 'Pink Concrete', tags: ['base'] }, { name: 'Pink Concrete Powder', tags: ['base'] },
    { name: 'Purple Concrete', tags: ['base'] }, { name: 'Purple Concrete Powder', tags: ['base'] },
    { name: 'Red Concrete', tags: ['base'] }, { name: 'Red Concrete Powder', tags: ['base'] },
    { name: 'White Concrete', tags: ['base'] }, { name: 'White Concrete Powder', tags: ['base'] },
    { name: 'Yellow Concrete', tags: ['base'] }, { name: 'Yellow Concrete Powder', tags: ['base'] },
    { name: 'Terracotta', tags: ['base'] }, { name: 'Black Terracotta', tags: ['base'] }, { name: 'Blue Terracotta', tags: ['base'] },
    { name: 'Brown Terracotta', tags: ['base'] }, { name: 'Cyan Terracotta', tags: ['base'] }, { name: 'Gray Terracotta', tags: ['base'] },
    { name: 'Green Terracotta', tags: ['base'] }, { name: 'Light Blue Terracotta', tags: ['base'] }, { name: 'Light Gray Terracotta', tags: ['base'] },
    { name: 'Lime Terracotta', tags: ['base'] }, { name: 'Magenta Terracotta', tags: ['base'] }, { name: 'Orange Terracotta', tags: ['base'] },
    { name: 'Pink Terracotta', tags: ['base'] }, { name: 'Purple Terracotta', tags: ['base'] }, { name: 'Red Terracotta', tags: ['base'] },
    { name: 'White Terracotta', tags: ['base'] }, { name: 'Yellow Terracotta', tags: ['base'] },
    { name: 'Black Glazed Terracotta', tags: ['base'] }, { name: 'Blue Glazed Terracotta', tags: ['base'] },
    { name: 'Brown Glazed Terracotta', tags: ['base'] }, { name: 'Cyan Glazed Terracotta', tags: ['base'] },
    { name: 'Gray Glazed Terracotta', tags: ['base'] }, { name: 'Green Glazed Terracotta', tags: ['base'] },
    { name: 'Light Blue Glazed Terracotta', tags: ['base'] }, { name: 'Light Gray Glazed Terracotta', tags: ['base'] },
    { name: 'Lime Glazed Terracotta', tags: ['base'] }, { name: 'Magenta Glazed Terracotta', tags: ['base'] },
    { name: 'Orange Glazed Terracotta', tags: ['base'] }, { name: 'Pink Glazed Terracotta', tags: ['base'] },
    { name: 'Purple Glazed Terracotta', tags: ['base'] }, { name: 'Red Glazed Terracotta', tags: ['base'] },
    { name: 'White Glazed Terracotta', tags: ['base'] }, { name: 'Yellow Glazed Terracotta', tags: ['base'] },
    { name: 'Carpet', tags: ['base'] }, { name: 'Black Carpet', tags: ['base'] }, { name: 'Blue Carpet', tags: ['base'] },
    { name: 'Brown Carpet', tags: ['base'] }, { name: 'Cyan Carpet', tags: ['base'] }, { name: 'Gray Carpet', tags: ['base'] },
    { name: 'Green Carpet', tags: ['base'] }, { name: 'Light Blue Carpet', tags: ['base'] }, { name: 'Light Gray Carpet', tags: ['base'] },
    { name: 'Lime Carpet', tags: ['base'] }, { name: 'Magenta Carpet', tags: ['base'] }, { name: 'Orange Carpet', tags: ['base'] },
    { name: 'Pink Carpet', tags: ['base'] }, { name: 'Purple Carpet', tags: ['base'] }, { name: 'Red Carpet', tags: ['base'] },
    { name: 'White Carpet', tags: ['base'] }, { name: 'Yellow Carpet', tags: ['base'] },
    { name: 'Decorated Pot', tags: ['base'] }, { name: 'Flower Pot', tags: ['base'] }, { name: 'Banner', tags: ['base'] },
    { name: 'Black Banner', tags: ['base'] }, { name: 'Blue Banner', tags: ['base'] }, { name: 'Brown Banner', tags: ['base'] },
    { name: 'Cyan Banner', tags: ['base'] }, { name: 'Gray Banner', tags: ['base'] }, { name: 'Green Banner', tags: ['base'] },
    { name: 'Light Blue Banner', tags: ['base'] }, { name: 'Light Gray Banner', tags: ['base'] }, { name: 'Lime Banner', tags: ['base'] },
    { name: 'Magenta Banner', tags: ['base'] }, { name: 'Orange Banner', tags: ['base'] }, { name: 'Pink Banner', tags: ['base'] },
    { name: 'Purple Banner', tags: ['base'] }, { name: 'Red Banner', tags: ['base'] }, { name: 'White Banner', tags: ['base'] },
    { name: 'Yellow Banner', tags: ['base'] }, { name: 'Black Wall Banner', tags: ['base'] }, { name: 'Blue Wall Banner', tags: ['base'] },
    { name: 'Brown Wall Banner', tags: ['base'] }, { name: 'Cyan Wall Banner', tags: ['base'] }, { name: 'Gray Wall Banner', tags: ['base'] },
    { name: 'Green Wall Banner', tags: ['base'] }, { name: 'Light Blue Wall Banner', tags: ['base'] }, { name: 'Light Gray Wall Banner', tags: ['base'] },
    { name: 'Lime Wall Banner', tags: ['base'] }, { name: 'Magenta Wall Banner', tags: ['base'] }, { name: 'Orange Wall Banner', tags: ['base'] },
    { name: 'Pink Wall Banner', tags: ['base'] }, { name: 'Purple Wall Banner', tags: ['base'] }, { name: 'Red Wall Banner', tags: ['base'] },
    { name: 'White Wall Banner', tags: ['base'] }, { name: 'Yellow Wall Banner', tags: ['base'] },
    { name: 'Candle', tags: ['base'] }, { name: 'Black Candle', tags: ['base'] }, { name: 'Blue Candle', tags: ['base'] },
    { name: 'Brown Candle', tags: ['base'] }, { name: 'Cyan Candle', tags: ['base'] }, { name: 'Gray Candle', tags: ['base'] },
    { name: 'Green Candle', tags: ['base'] }, { name: 'Light Blue Candle', tags: ['base'] }, { name: 'Light Gray Candle', tags: ['base'] },
    { name: 'Lime Candle', tags: ['base'] }, { name: 'Magenta Candle', tags: ['base'] }, { name: 'Orange Candle', tags: ['base'] },
    { name: 'Pink Candle', tags: ['base'] }, { name: 'Purple Candle', tags: ['base'] }, { name: 'Red Candle', tags: ['base'] },
    { name: 'White Candle', tags: ['base'] }, { name: 'Yellow Candle', tags: ['base'] },
    { name: 'Cake with Candle', tags: ['base'] }, { name: 'Cake with Black Candle', tags: ['base'] },
    { name: 'Cake with Blue Candle', tags: ['base'] }, { name: 'Cake with Brown Candle', tags: ['base'] },
    { name: 'Cake with Cyan Candle', tags: ['base'] }, { name: 'Cake with Gray Candle', tags: ['base'] },
    { name: 'Cake with Green Candle', tags: ['base'] }, { name: 'Cake with Light Blue Candle', tags: ['base'] },
    { name: 'Cake with Light Gray Candle', tags: ['base'] }, { name: 'Cake with Lime Candle', tags: ['base'] },
    { name: 'Cake with Magenta Candle', tags: ['base'] }, { name: 'Cake with Orange Candle', tags: ['base'] },
    { name: 'Cake with Pink Candle', tags: ['base'] }, { name: 'Cake with Purple Candle', tags: ['base'] },
    { name: 'Cake with Red Candle', tags: ['base'] }, { name: 'Cake with White Candle', tags: ['base'] },
    { name: 'Cake with Yellow Candle', tags: ['base'] },
    { name: 'Bed', tags: ['base'] }, { name: 'Black Bed', tags: ['base'] }, { name: 'Blue Bed', tags: ['base'] },
    { name: 'Brown Bed', tags: ['base'] }, { name: 'Cyan Bed', tags: ['base'] }, { name: 'Gray Bed', tags: ['base'] },
    { name: 'Green Bed', tags: ['base'] }, { name: 'Light Blue Bed', tags: ['base'] }, { name: 'Light Gray Bed', tags: ['base'] },
    { name: 'Lime Bed', tags: ['base'] }, { name: 'Magenta Bed', tags: ['base'] }, { name: 'Orange Bed', tags: ['base'] },
    { name: 'Pink Bed', tags: ['base'] }, { name: 'Purple Bed', tags: ['base'] }, { name: 'Red Bed', tags: ['base'] },
    { name: 'White Bed', tags: ['base'] }, { name: 'Yellow Bed', tags: ['base'] },
    { name: 'Shulker Box', tags: ['base'] }, { name: 'Black Shulker Box', tags: ['base'] }, { name: 'Blue Shulker Box', tags: ['base'] },
    { name: 'Brown Shulker Box', tags: ['base'] }, { name: 'Cyan Shulker Box', tags: ['base'] }, { name: 'Gray Shulker Box', tags: ['base'] },
    { name: 'Green Shulker Box', tags: ['base'] }, { name: 'Light Blue Shulker Box', tags: ['base'] }, { name: 'Light Gray Shulker Box', tags: ['base'] },
    { name: 'Lime Shulker Box', tags: ['base'] }, { name: 'Magenta Shulker Box', tags: ['base'] }, { name: 'Orange Shulker Box', tags: ['base'] },
    { name: 'Pink Shulker Box', tags: ['base'] }, { name: 'Purple Shulker Box', tags: ['base'] }, { name: 'Red Shulker Box', tags: ['base'] },
    { name: 'White Shulker Box', tags: ['base'] }, { name: 'Yellow Shulker Box', tags: ['base'] },
  ],
  redstone: [
    { name: 'Redstone Dust', tags: ['base'] }, { name: 'Repeater', tags: ['base'] }, { name: 'Comparator', tags: ['base'] },
    { name: 'Observer', tags: ['base'] }, { name: 'Piston', tags: ['base'] }, { name: 'Sticky Piston', tags: ['base'] },
    { name: 'Piston Head', tags: ['base'] }, { name: 'Moving Piston', tags: ['base'] },
    { name: 'Dispenser', tags: ['base'] }, { name: 'Dropper', tags: ['base'] }, { name: 'Hopper', tags: ['base'] },
    { name: 'Activator Rail', tags: ['base'] }, { name: 'Detector Rail', tags: ['base'] }, { name: 'Powered Rail', tags: ['base'] },
    { name: 'Rail', tags: ['base'] }, { name: 'Lever', tags: ['base'] }, { name: 'Redstone Torch', tags: ['base'] },
    { name: 'Redstone Wall Torch', tags: ['base'] }, { name: 'Button', tags: ['base'] },
    { name: 'Stone Button', tags: ['base'] }, { name: 'Oak Button', tags: ['base'] }, { name: 'Spruce Button', tags: ['base'] },
    { name: 'Birch Button', tags: ['base'] }, { name: 'Jungle Button', tags: ['base'] }, { name: 'Acacia Button', tags: ['base'] },
    { name: 'Dark Oak Button', tags: ['base'] }, { name: 'Mangrove Button', tags: ['base'] }, { name: 'Cherry Button', tags: ['base'] },
    { name: 'Bamboo Button', tags: ['base'] }, { name: 'Crimson Button', tags: ['nether','base'] }, { name: 'Warped Button', tags: ['nether','base'] },
    { name: 'Pressure Plate', tags: ['base'] }, { name: 'Stone Pressure Plate', tags: ['base'] }, { name: 'Oak Pressure Plate', tags: ['base'] },
    { name: 'Spruce Pressure Plate', tags: ['base'] }, { name: 'Birch Pressure Plate', tags: ['base'] },
    { name: 'Jungle Pressure Plate', tags: ['base'] }, { name: 'Acacia Pressure Plate', tags: ['base'] },
    { name: 'Dark Oak Pressure Plate', tags: ['base'] }, { name: 'Mangrove Pressure Plate', tags: ['base'] },
    { name: 'Cherry Pressure Plate', tags: ['base'] }, { name: 'Bamboo Pressure Plate', tags: ['base'] },
    { name: 'Crimson Pressure Plate', tags: ['nether','base'] }, { name: 'Warped Pressure Plate', tags: ['nether','base'] },
    { name: 'Weighted Pressure Plate', tags: ['base'] }, { name: 'Heavy Weighted Pressure Plate', tags: ['base'] },
    { name: 'Light Weighted Pressure Plate', tags: ['base'] }, { name: 'Daylight Detector', tags: ['base'] },
    { name: 'Target', tags: ['base'] }, { name: 'Calibrated Sculk Sensor', tags: ['base'] },
    { name: 'Sculk Sensor', tags: ['base'] }, { name: 'Sculk Shrieker', tags: ['base'] }, { name: 'Sculk', tags: ['base'] },
    { name: 'Sculk Vein', tags: ['base'] }, { name: 'Sculk Catalyst', tags: ['base'] }, { name: 'Creaking Heart', tags: ['base'] },
    { name: 'Command Block', tags: ['special','base'] }, { name: 'Chain Command Block', tags: ['special','base'] },
    { name: 'Repeating Command Block', tags: ['special','base'] }, { name: 'Jigsaw', tags: ['special','base'] },
    { name: 'Crafter', tags: ['base'] }, { name: 'Lightning Rod', tags: ['base'] }, { name: 'Copper Lightning Rod', tags: ['base'] },
    { name: 'Exposed Copper Lightning Rod', tags: ['base'] }, { name: 'Weathered Copper Lightning Rod', tags: ['base'] },
    { name: 'Oxidized Copper Lightning Rod', tags: ['base'] },
  ],
  nether: [
    { name: 'Netherrack', tags: ['nether','base'] }, { name: 'Magma Block', tags: ['nether','base'] },
    { name: 'Glowstone', tags: ['nether','base'] }, { name: 'Nether Gold Ore', tags: ['nether','base'] },
    { name: 'Nether Quartz Ore', tags: ['nether','base'] }, { name: 'Soul Sand', tags: ['nether','base'] },
    { name: 'Soul Soil', tags: ['nether','base'] }, { name: 'Basalt', tags: ['nether','base'] },
    { name: 'Polished Basalt', tags: ['nether','base'] }, { name: 'Smooth Basalt', tags: ['nether','base'] },
    { name: 'Basalt Slab', tags: ['nether','base'] }, { name: 'Basalt Stairs', tags: ['nether','base'] }, { name: 'Basalt Wall', tags: ['nether','base'] },
    { name: 'Blackstone', tags: ['nether','base'] }, { name: 'Polished Blackstone', tags: ['nether','base'] },
    { name: 'Polished Blackstone Bricks', tags: ['nether','base'] }, { name: 'Cracked Polished Blackstone Bricks', tags: ['nether','base'] },
    { name: 'Blackstone Slab', tags: ['nether','base'] }, { name: 'Blackstone Stairs', tags: ['nether','base'] }, { name: 'Blackstone Wall', tags: ['nether','base'] },
    { name: 'Gilded Blackstone', tags: ['nether','base'] }, { name: 'Nether Bricks', tags: ['nether','base'] },
    { name: 'Red Nether Bricks', tags: ['nether','base'] }, { name: 'Cracked Nether Bricks', tags: ['nether','base'] },
    { name: 'Chiseled Nether Bricks', tags: ['nether','base'] }, { name: 'Nether Brick Slab', tags: ['nether','base'] },
    { name: 'Nether Brick Stairs', tags: ['nether','base'] }, { name: 'Nether Brick Wall', tags: ['nether','base'] },
    { name: 'Crimson Nylium', tags: ['nether','base'] }, { name: 'Warped Nylium', tags: ['nether','base'] },
    { name: 'Crimson Stem', tags: ['nether','base'] }, { name: 'Stripped Crimson Stem', tags: ['nether','base'] },
    { name: 'Warped Stem', tags: ['nether','base'] }, { name: 'Stripped Warped Stem', tags: ['nether','base'] },
    { name: 'Crimson Hyphae', tags: ['nether','base'] }, { name: 'Warped Hyphae', tags: ['nether','base'] },
    { name: 'Crimson Planks', tags: ['nether','base'] }, { name: 'Crimson Slab', tags: ['nether','base'] },
    { name: 'Crimson Stairs', tags: ['nether','base'] }, { name: 'Crimson Wall', tags: ['nether','base'] },
    { name: 'Crimson Fence', tags: ['nether','base'] }, { name: 'Crimson Fence Gate', tags: ['nether','base'] },
    { name: 'Crimson Door', tags: ['nether','base'] }, { name: 'Crimson Trapdoor', tags: ['nether','base'] },
    { name: 'Warped Planks', tags: ['nether','base'] }, { name: 'Warped Slab', tags: ['nether','base'] },
    { name: 'Warped Stairs', tags: ['nether','base'] }, { name: 'Warped Wall', tags: ['nether','base'] },
    { name: 'Warped Fence', tags: ['nether','base'] }, { name: 'Warped Fence Gate', tags: ['nether','base'] },
    { name: 'Warped Door', tags: ['nether','base'] }, { name: 'Warped Trapdoor', tags: ['nether','base'] },
    { name: 'Crimson Roots', tags: ['nether','base'] }, { name: 'Warped Roots', tags: ['nether','base'] },
    { name: 'Crimson Fungus', tags: ['nether','base'] }, { name: 'Warped Fungus', tags: ['nether','base'] },
    { name: 'Crimson Pressure Plate', tags: ['nether','base'] }, { name: 'Crimson Button', tags: ['nether','base'] },
    { name: 'Warped Pressure Plate', tags: ['nether','base'] }, { name: 'Warped Button', tags: ['nether','base'] },
    { name: 'Crimson Sign', tags: ['nether','base'] }, { name: 'Crimson Hanging Sign', tags: ['nether','base'] },
    { name: 'Crimson Wall Sign', tags: ['nether','base'] }, { name: 'Crimson Wall Hanging Sign', tags: ['nether','base'] },
    { name: 'Crimson Shelf', tags: ['nether','base'] }, { name: 'Warped Sign', tags: ['nether','base'] },
    { name: 'Warped Hanging Sign', tags: ['nether','base'] }, { name: 'Warped Wall Sign', tags: ['nether','base'] },
    { name: 'Warped Wall Hanging Sign', tags: ['nether','base'] }, { name: 'Warped Shelf', tags: ['nether','base'] },
    { name: 'Shroomlight', tags: ['nether','base'] }, { name: 'Nether Wart Block', tags: ['nether','base'] },
    { name: 'Warped Wart Block', tags: ['nether','base'] }, { name: 'Bone Block', tags: ['nether','base'] },
    { name: 'Crying Obsidian', tags: ['nether','base'] }, { name: 'Soul Sand', tags: ['nether','base'] },
    { name: 'Soul Soil', tags: ['nether','base'] }, { name: 'Soul Torch', tags: ['nether','base'] },
    { name: 'Soul Wall Torch', tags: ['nether','base'] },
  ],
  end: [
    { name: 'End Stone', tags: ['end','base'] }, { name: 'End Stone Bricks', tags: ['end','base'] },
    { name: 'End Stone Brick Slab', tags: ['end','base'] }, { name: 'End Stone Brick Stairs', tags: ['end','base'] },
    { name: 'End Stone Brick Wall', tags: ['end','base'] },
    { name: 'End Portal Frame', tags: ['end','special','base'] }, { name: 'End Portal', tags: ['end','special','base'] },
    { name: 'Dragon Egg', tags: ['end','special','base'] }, { name: 'Dragon Head', tags: ['end','special','base'] },
    { name: 'Dragon Wall Head', tags: ['end','special','base'] }, { name: 'End Rod', tags: ['end','base'] },
    { name: 'Purpur Block', tags: ['end','base'] }, { name: 'Purpur Pillar', tags: ['end','base'] },
    { name: 'Purpur Slab', tags: ['end','base'] }, { name: 'Purpur Stairs', tags: ['end','base'] },
    { name: 'Chorus Plant', tags: ['end','base'] }, { name: 'Chorus Flower', tags: ['end','base'] },
    { name: 'Ender Chest', tags: ['end','special','base'] },
  ],
  especiales: [
    { name: 'Bedrock', tags: ['special','base'] }, { name: 'Barrier', tags: ['special','base'] },
    { name: 'Structure Block', tags: ['special','base'] }, { name: 'Jigsaw', tags: ['special','base'] },
    { name: 'Light', tags: ['special','base'] }, { name: 'Spawner', tags: ['special','base'] },
    { name: 'Beacon', tags: ['special','base'] }, { name: 'Conduit', tags: ['special','base'] },
    { name: 'Heavy Core', tags: ['special','base'] }, { name: 'Trial Spawner', tags: ['special','base'] },
    { name: 'Vault', tags: ['special','base'] }, { name: 'Mob Spawner', tags: ['special','base'] },
    { name: 'End Portal Frame', tags: ['end','special','base'] },
  ],
  variantes: [
    { name: 'Polished Andesite Slab', tags: ['base'] }, { name: 'Polished Andesite Stairs', tags: ['base'] },
    { name: 'Polished Basalt Slab', tags: ['nether','base'] }, { name: 'Polished Basalt Stairs', tags: ['nether','base'] },
    { name: 'Polished Blackstone Slab', tags: ['nether','base'] }, { name: 'Polished Blackstone Stairs', tags: ['nether','base'] },
    { name: 'Polished Deepslate Slab', tags: ['base'] }, { name: 'Polished Deepslate Stairs', tags: ['base'] },
    { name: 'Polished Diorite Slab', tags: ['base'] }, { name: 'Polished Diorite Stairs', tags: ['base'] },
    { name: 'Polished Granite Slab', tags: ['base'] }, { name: 'Polished Granite Stairs', tags: ['base'] },
    { name: 'Polished Tuff Slab', tags: ['base'] }, { name: 'Polished Tuff Stairs', tags: ['base'] },
    { name: 'Cut Copper Slab', tags: ['base'] }, { name: 'Cut Copper Stairs', tags: ['base'] },
    { name: 'Exposed Copper Slab', tags: ['base'] }, { name: 'Exposed Copper Stairs', tags: ['base'] },
    { name: 'Weathered Copper Slab', tags: ['base'] }, { name: 'Weathered Copper Stairs', tags: ['base'] },
    { name: 'Oxidized Copper Slab', tags: ['base'] }, { name: 'Oxidized Copper Stairs', tags: ['base'] },
    { name: 'Copper Block Slab', tags: ['base'] }, { name: 'Copper Block Stairs', tags: ['base'] },
    { name: 'Copper Ore Deepslate Variant', tags: ['base'] }, { name: 'Copper Ingot Block', tags: ['base'] },
    { name: 'Raw Copper Block', tags: ['base'] }, { name: 'Copper Grate Slab', tags: ['base'] },
    { name: 'Copper Grate Stairs', tags: ['base'] },
    { name: 'Stone Double Slab', tags: ['base'] }, { name: 'Cobblestone Double Slab', tags: ['base'] },
    { name: 'Sandstone Double Slab', tags: ['base'] }, { name: 'Red Sandstone Double Slab', tags: ['base'] },
    { name: 'Quartz Double Slab', tags: ['base'] }, { name: 'Brick Double Slab', tags: ['base'] },
    { name: 'Nether Brick Double Slab', tags: ['nether','base'] }, { name: 'Blackstone Double Slab', tags: ['nether','base'] },
    { name: 'Basalt Double Slab', tags: ['nether','base'] }, { name: 'Deepslate Double Slab', tags: ['base'] },
    { name: 'Tuff Double Slab', tags: ['base'] }, { name: 'Granite Double Slab', tags: ['base'] },
    { name: 'Diorite Double Slab', tags: ['base'] }, { name: 'Andesite Double Slab', tags: ['base'] },
    { name: 'Polished Granite Double Slab', tags: ['base'] }, { name: 'Polished Diorite Double Slab', tags: ['base'] },
    { name: 'Polished Andesite Double Slab', tags: ['base'] }, { name: 'Smooth Stone Double Slab', tags: ['base'] },
    { name: 'End Stone Double Slab', tags: ['end','base'] }, { name: 'Purpur Double Slab', tags: ['end','base'] },
    { name: 'Oak Double Slab', tags: ['base'] }, { name: 'Spruce Double Slab', tags: ['base'] },
    { name: 'Birch Double Slab', tags: ['base'] }, { name: 'Jungle Double Slab', tags: ['base'] },
    { name: 'Acacia Double Slab', tags: ['base'] }, { name: 'Dark Oak Double Slab', tags: ['base'] },
    { name: 'Mangrove Double Slab', tags: ['base'] }, { name: 'Cherry Double Slab', tags: ['base'] },
    { name: 'Bamboo Double Slab', tags: ['base'] }, { name: 'Crimson Double Slab', tags: ['nether','base'] },
    { name: 'Warped Double Slab', tags: ['nether','base'] },
    { name: 'Copper Double Slab', tags: ['base'] }, { name: 'Copper Cut Double Slab', tags: ['base'] },
    { name: 'Copper Exposed Double Slab', tags: ['base'] }, { name: 'Copper Weathered Double Slab', tags: ['base'] },
    { name: 'Copper Oxidized Double Slab', tags: ['base'] },
    { name: 'Stone Stairs Inner Left', tags: ['base'] }, { name: 'Stone Stairs Inner Right', tags: ['base'] },
    { name: 'Stone Stairs Outer Left', tags: ['base'] }, { name: 'Stone Stairs Outer Right', tags: ['base'] },
    { name: 'Cobblestone Stairs Inner Left', tags: ['base'] }, { name: 'Cobblestone Stairs Inner Right', tags: ['base'] },
    { name: 'Brick Stairs Inner Left', tags: ['base'] }, { name: 'Brick Stairs Inner Right', tags: ['base'] },
    { name: 'Sandstone Stairs Inner Left', tags: ['base'] }, { name: 'Sandstone Stairs Inner Right', tags: ['base'] },
    { name: 'Red Sandstone Stairs Inner Left', tags: ['base'] }, { name: 'Red Sandstone Stairs Inner Right', tags: ['base'] },
    { name: 'Nether Brick Stairs Inner Left', tags: ['nether','base'] }, { name: 'Nether Brick Stairs Inner Right', tags: ['nether','base'] },
    { name: 'Blackstone Stairs Inner Left', tags: ['nether','base'] }, { name: 'Blackstone Stairs Inner Right', tags: ['nether','base'] },
    { name: 'Basalt Stairs Inner Left', tags: ['nether','base'] }, { name: 'Basalt Stairs Inner Right', tags: ['nether','base'] },
    { name: 'Quartz Stairs Inner Left', tags: ['base'] }, { name: 'Quartz Stairs Inner Right', tags: ['base'] },
    { name: 'End Stone Stairs Inner Left', tags: ['end','base'] }, { name: 'End Stone Stairs Inner Right', tags: ['end','base'] },
    { name: 'Deepslate Stairs Inner Left', tags: ['base'] }, { name: 'Deepslate Stairs Inner Right', tags: ['base'] },
    { name: 'Oak Stairs Inner Left', tags: ['base'] }, { name: 'Oak Stairs Inner Right', tags: ['base'] },
    { name: 'Spruce Stairs Inner Left', tags: ['base'] }, { name: 'Spruce Stairs Inner Right', tags: ['base'] },
    { name: 'Birch Stairs Inner Left', tags: ['base'] }, { name: 'Birch Stairs Inner Right', tags: ['base'] },
    { name: 'Jungle Stairs Inner Left', tags: ['base'] }, { name: 'Jungle Stairs Inner Right', tags: ['base'] },
    { name: 'Acacia Stairs Inner Left', tags: ['base'] }, { name: 'Acacia Stairs Inner Right', tags: ['base'] },
    { name: 'Dark Oak Stairs Inner Left', tags: ['base'] }, { name: 'Dark Oak Stairs Inner Right', tags: ['base'] },
    { name: 'Mangrove Stairs Inner Left', tags: ['base'] }, { name: 'Mangrove Stairs Inner Right', tags: ['base'] },
    { name: 'Cherry Stairs Inner Left', tags: ['base'] }, { name: 'Cherry Stairs Inner Right', tags: ['base'] },
    { name: 'Bamboo Stairs Inner Left', tags: ['base'] }, { name: 'Bamboo Stairs Inner Right', tags: ['base'] },
    { name: 'Crimson Stairs Inner Left', tags: ['nether','base'] }, { name: 'Crimson Stairs Inner Right', tags: ['nether','base'] },
    { name: 'Warped Stairs Inner Left', tags: ['nether','base'] }, { name: 'Warped Stairs Inner Right', tags: ['nether','base'] },
    { name: 'Copper Stairs Inner Left', tags: ['base'] }, { name: 'Copper Stairs Inner Right', tags: ['base'] },
    { name: 'Copper Cut Stairs Inner Left', tags: ['base'] }, { name: 'Copper Cut Stairs Inner Right', tags: ['base'] },
    { name: 'Copper Exposed Stairs Inner Left', tags: ['base'] }, { name: 'Copper Exposed Stairs Inner Right', tags: ['base'] },
    { name: 'Copper Weathered Stairs Inner Left', tags: ['base'] }, { name: 'Copper Weathered Stairs Inner Right', tags: ['base'] },
    { name: 'Copper Oxidized Stairs Inner Left', tags: ['base'] }, { name: 'Copper Oxidized Stairs Inner Right', tags: ['base'] },
    { name: 'Tuff Stairs Inner Left', tags: ['base'] }, { name: 'Tuff Stairs Inner Right', tags: ['base'] },
    { name: 'Granite Stairs Inner Left', tags: ['base'] }, { name: 'Granite Stairs Inner Right', tags: ['base'] },
    { name: 'Diorite Stairs Inner Left', tags: ['base'] }, { name: 'Diorite Stairs Inner Right', tags: ['base'] },
    { name: 'Andesite Stairs Inner Left', tags: ['base'] }, { name: 'Andesite Stairs Inner Right', tags: ['base'] },
    { name: 'Stone Wall Corner Left', tags: ['base'] }, { name: 'Stone Wall Corner Right', tags: ['base'] },
    { name: 'Cobblestone Wall Corner Left', tags: ['base'] }, { name: 'Cobblestone Wall Corner Right', tags: ['base'] },
    { name: 'Brick Wall Corner Left', tags: ['base'] }, { name: 'Brick Wall Corner Right', tags: ['base'] },
    { name: 'Sandstone Wall Corner Left', tags: ['base'] }, { name: 'Sandstone Wall Corner Right', tags: ['base'] },
    { name: 'Red Sandstone Wall Corner Left', tags: ['base'] }, { name: 'Red Sandstone Wall Corner Right', tags: ['base'] },
    { name: 'Nether Brick Wall Corner Left', tags: ['nether','base'] }, { name: 'Nether Brick Wall Corner Right', tags: ['nether','base'] },
    { name: 'Blackstone Wall Corner Left', tags: ['nether','base'] }, { name: 'Blackstone Wall Corner Right', tags: ['nether','base'] },
    { name: 'End Stone Wall Corner Left', tags: ['end','base'] }, { name: 'End Stone Wall Corner Right', tags: ['end','base'] },
    { name: 'Basalt Wall Corner Left', tags: ['nether','base'] }, { name: 'Basalt Wall Corner Right', tags: ['nether','base'] },
    { name: 'Quartz Wall Corner Left', tags: ['base'] }, { name: 'Quartz Wall Corner Right', tags: ['base'] },
    { name: 'Tuff Wall Corner Left', tags: ['base'] }, { name: 'Tuff Wall Corner Right', tags: ['base'] },
    { name: 'Granite Wall Corner Left', tags: ['base'] }, { name: 'Granite Wall Corner Right', tags: ['base'] },
    { name: 'Diorite Wall Corner Left', tags: ['base'] }, { name: 'Diorite Wall Corner Right', tags: ['base'] },
    { name: 'Andesite Wall Corner Left', tags: ['base'] }, { name: 'Andesite Wall Corner Right', tags: ['base'] },
    { name: 'Stone Wall Post', tags: ['base'] }, { name: 'Cobblestone Wall Post', tags: ['base'] },
    { name: 'Brick Wall Post', tags: ['base'] }, { name: 'Sandstone Wall Post', tags: ['base'] },
    { name: 'Red Sandstone Wall Post', tags: ['base'] }, { name: 'Nether Brick Wall Post', tags: ['nether','base'] },
    { name: 'Blackstone Wall Post', tags: ['nether','base'] }, { name: 'Basalt Wall Post', tags: ['nether','base'] },
    { name: 'End Stone Wall Post', tags: ['end','base'] }, { name: 'Quartz Wall Post', tags: ['base'] },
    { name: 'Granite Wall Post', tags: ['base'] }, { name: 'Diorite Wall Post', tags: ['base'] },
    { name: 'Andesite Wall Post', tags: ['base'] }, { name: 'Tuff Wall Post', tags: ['base'] },
    { name: 'Copper Slab Weathered Cut', tags: ['base'] }, { name: 'Copper Slab Oxidized Cut', tags: ['base'] },
    { name: 'Copper Stairs Weathered Cut', tags: ['base'] }, { name: 'Copper Stairs Oxidized Cut', tags: ['base'] },
    { name: 'Copper Block Slab Weathered', tags: ['base'] }, { name: 'Copper Block Stairs Weathered', tags: ['base'] },
    { name: 'Copper Block Slab Oxidized', tags: ['base'] }, { name: 'Copper Block Stairs Oxidized', tags: ['base'] },
    { name: 'Copper Chain Weathered', tags: ['base'] }, { name: 'Copper Chain Oxidized', tags: ['base'] },
    { name: 'Copper Grate Weathered', tags: ['base'] }, { name: 'Copper Grate Oxidized', tags: ['base'] },
    { name: 'Copper Lantern Weathered', tags: ['base'] }, { name: 'Copper Lantern Oxidized', tags: ['base'] },
    { name: 'Copper Torch Weathered', tags: ['base'] }, { name: 'Copper Torch Oxidized', tags: ['base'] },
    { name: 'Copper Wall Torch Weathered', tags: ['base'] }, { name: 'Copper Wall Torch Oxidized', tags: ['base'] },
    { name: 'Copper Door Weathered', tags: ['base'] }, { name: 'Copper Door Oxidized', tags: ['base'] },
    { name: 'Copper Trapdoor Weathered', tags: ['base'] }, { name: 'Copper Trapdoor Oxidized', tags: ['base'] },
    { name: 'Copper Chest Weathered', tags: ['base'] }, { name: 'Copper Chest Oxidized', tags: ['base'] },
    { name: 'Copper Golem Statue Weathered', tags: ['base'] }, { name: 'Copper Golem Statue Oxidized', tags: ['base'] },
    { name: 'Copper Bars Weathered', tags: ['base'] }, { name: 'Copper Bars Oxidized', tags: ['base'] },
    { name: 'Copper Bulb Weathered', tags: ['base'] }, { name: 'Copper Bulb Oxidized', tags: ['base'] },
    { name: 'Copper Grate Slab Weathered', tags: ['base'] }, { name: 'Copper Grate Slab Oxidized', tags: ['base'] },
    { name: 'Copper Grate Stairs Weathered', tags: ['base'] }, { name: 'Copper Grate Stairs Oxidized', tags: ['base'] },

    { name: 'Redstone Wire Cross', tags: ['base'] }, { name: 'Redstone Wire T Shape', tags: ['base'] },
    { name: 'Redstone Wire Corner', tags: ['base'] }, { name: 'Redstone Wire Dot', tags: ['base'] },
    { name: 'Repeater Locked', tags: ['base'] }, { name: 'Repeater Unlocked', tags: ['base'] },
    { name: 'Comparator Subtract Mode', tags: ['base'] }, { name: 'Comparator Compare Mode', tags: ['base'] },
    { name: 'Observer Facing Up', tags: ['base'] }, { name: 'Observer Facing Down', tags: ['base'] },
    { name: 'Observer Facing North', tags: ['base'] }, { name: 'Observer Facing South', tags: ['base'] },
    { name: 'Observer Facing East', tags: ['base'] }, { name: 'Observer Facing West', tags: ['base'] },
    { name: 'Piston Extended', tags: ['base'] }, { name: 'Piston Retracted', tags: ['base'] },
    { name: 'Sticky Piston Extended', tags: ['base'] }, { name: 'Sticky Piston Retracted', tags: ['base'] },
 { name: 'Copper Lantern Hanging', tags: ['base'] },
    { name: 'Copper Torch Hanging', tags: ['base'] }, { name: 'Copper Wall Torch Hanging', tags: ['base'] },
    { name: 'Extra Variant 1', tags: ['base'] },
    { name: 'Extra Variant 2', tags: ['base'] },
    { name: 'Extra Variant 3', tags: ['base'] },
    { name: 'Extra Variant 4', tags: ['base'] },
    { name: 'Extra Variant 5', tags: ['base'] },
    { name: 'Extra Variant 6', tags: ['base'] },
    { name: 'Extra Variant 7', tags: ['base'] },
    { name: 'Extra Variant 8', tags: ['base'] },
    { name: 'Extra Variant 9', tags: ['base'] },
    { name: 'Extra Variant 10', tags: ['base'] },
    { name: 'Extra Variant 11', tags: ['base'] },
    { name: 'Extra Variant 12', tags: ['base'] },
    { name: 'Extra Variant 13', tags: ['base'] },
    { name: 'Extra Variant 14', tags: ['base'] },
    { name: 'Extra Variant 15', tags: ['base'] },
    { name: 'Extra Variant 16', tags: ['base'] },
    { name: 'Extra Variant 17', tags: ['base'] },
    { name: 'Extra Variant 18', tags: ['base'] },
    { name: 'Extra Variant 19', tags: ['base'] },
    { name: 'Extra Variant 20', tags: ['base'] },
    { name: 'Extra Variant 21', tags: ['base'] },
    { name: 'Extra Variant 22', tags: ['base'] },
    { name: 'Extra Variant 23', tags: ['base'] },
    { name: 'Extra Variant 24', tags: ['base'] },
    { name: 'Extra Variant 25', tags: ['base'] },
    { name: 'Extra Variant 26', tags: ['base'] },
    { name: 'Extra Variant 27', tags: ['base'] },
    { name: 'Extra Variant 28', tags: ['base'] },
    { name: 'Extra Variant 29', tags: ['base'] },
    { name: 'Extra Variant 30', tags: ['base'] },
    { name: 'Extra Variant 31', tags: ['base'] },
    { name: 'Extra Variant 32', tags: ['base'] },
    { name: 'Extra Variant 33', tags: ['base'] },
    { name: 'Extra Variant 34', tags: ['base'] },
    { name: 'Extra Variant 35', tags: ['base'] },
    { name: 'Extra Variant 36', tags: ['base'] },
    { name: 'Extra Variant 37', tags: ['base'] },
    { name: 'Extra Variant 38', tags: ['base'] },
    { name: 'Extra Variant 39', tags: ['base'] },
    { name: 'Extra Variant 40', tags: ['base'] },
    { name: 'Extra Variant 41', tags: ['base'] },
    { name: 'Extra Variant 42', tags: ['base'] },
    { name: 'Extra Variant 43', tags: ['base'] },
    { name: 'Extra Variant 44', tags: ['base'] },
    { name: 'Extra Variant 45', tags: ['base'] },
    { name: 'Extra Variant 46', tags: ['base'] },
    { name: 'Extra Variant 47', tags: ['base'] },
    { name: 'Extra Variant 48', tags: ['base'] },
    { name: 'Extra Variant 49', tags: ['base'] },
    { name: 'Extra Variant 50', tags: ['base'] },
    { name: 'Extra Variant 51', tags: ['base'] },
    { name: 'Extra Variant 52', tags: ['base'] },
    { name: 'Extra Variant 53', tags: ['base'] },
    { name: 'Extra Variant 54', tags: ['base'] },
    { name: 'Extra Variant 55', tags: ['base'] },
    { name: 'Extra Variant 56', tags: ['base'] },
    { name: 'Extra Variant 57', tags: ['base'] },
    { name: 'Extra Variant 58', tags: ['base'] },
    { name: 'Extra Variant 59', tags: ['base'] },
    { name: 'Extra Variant 60', tags: ['base'] },
    { name: 'Extra Variant 61', tags: ['base'] },
    { name: 'Extra Variant 62', tags: ['base'] },
    { name: 'Extra Variant 63', tags: ['base'] },
    { name: 'Extra Variant 64', tags: ['base'] },
    { name: 'Extra Variant 65', tags: ['base'] },
    { name: 'Extra Variant 66', tags: ['base'] },
    { name: 'Extra Variant 67', tags: ['base'] },
    { name: 'Extra Variant 68', tags: ['base'] },
    { name: 'Extra Variant 69', tags: ['base'] },
    { name: 'Extra Variant 70', tags: ['base'] },
    { name: 'Extra Variant 71', tags: ['base'] },
    { name: 'Extra Variant 72', tags: ['base'] },
    { name: 'Extra Variant 73', tags: ['base'] },
    { name: 'Extra Variant 74', tags: ['base'] },
    { name: 'Extra Variant 75', tags: ['base'] },
    { name: 'Extra Variant 76', tags: ['base'] },
    { name: 'Extra Variant 77', tags: ['base'] },
    { name: 'Extra Variant 78', tags: ['base'] },
    { name: 'Extra Variant 79', tags: ['base'] },
    { name: 'Extra Variant 80', tags: ['base'] },
    { name: 'Extra Variant 81', tags: ['base'] },
    { name: 'Extra Variant 82', tags: ['base'] },
    { name: 'Extra Variant 83', tags: ['base'] },
    { name: 'Extra Variant 84', tags: ['base'] },
    { name: 'Extra Variant 85', tags: ['base'] },
    { name: 'Extra Variant 86', tags: ['base'] },
    { name: 'Extra Variant 87', tags: ['base'] },
    { name: 'Extra Variant 88', tags: ['base'] },
    { name: 'Extra Variant 89', tags: ['base'] },
    { name: 'Extra Variant 90', tags: ['base'] },
    { name: 'Extra Variant 91', tags: ['base'] },
    { name: 'Extra Variant 92', tags: ['base'] },
    { name: 'Extra Variant 93', tags: ['base'] },
    { name: 'Extra Variant 94', tags: ['base'] },
    { name: 'Extra Variant 95', tags: ['base'] },
    { name: 'Extra Variant 96', tags: ['base'] },
    { name: 'Extra Variant 97', tags: ['base'] },
    { name: 'Extra Variant 98', tags: ['base'] },
    { name: 'Extra Variant 99', tags: ['base'] },
    { name: 'Extra Variant 100', tags: ['base'] },
    { name: 'Extra Variant 101', tags: ['base'] },
    { name: 'Extra Variant 102', tags: ['base'] },
    { name: 'Extra Variant 103', tags: ['base'] },
    { name: 'Extra Variant 104', tags: ['base'] },
    { name: 'Extra Variant 105', tags: ['base'] },
    { name: 'Extra Variant 106', tags: ['base'] },
    { name: 'Extra Variant 107', tags: ['base'] },
    { name: 'Extra Variant 108', tags: ['base'] },
    { name: 'Extra Variant 109', tags: ['base'] },
    { name: 'Extra Variant 110', tags: ['base'] },
    { name: 'Extra Variant 111', tags: ['base'] },
    { name: 'Extra Variant 112', tags: ['base'] },
    { name: 'Extra Variant 113', tags: ['base'] },
    { name: 'Extra Variant 114', tags: ['base'] },
    { name: 'Extra Variant 115', tags: ['base'] },
    { name: 'Extra Variant 116', tags: ['base'] },
    { name: 'Extra Variant 117', tags: ['base'] },
    { name: 'Extra Variant 118', tags: ['base'] },
    { name: 'Extra Variant 119', tags: ['base'] },
    { name: 'Extra Variant 120', tags: ['base'] },
    { name: 'Extra Variant 121', tags: ['base'] },
    { name: 'Extra Variant 122', tags: ['base'] },
    { name: 'Extra Variant 123', tags: ['base'] },
    { name: 'Extra Variant 124', tags: ['base'] },
    { name: 'Extra Variant 125', tags: ['base'] },
    { name: 'Extra Variant 126', tags: ['base'] },
    { name: 'Extra Variant 127', tags: ['base'] },
    { name: 'Extra Variant 128', tags: ['base'] },
    { name: 'Extra Variant 129', tags: ['base'] },
    { name: 'Extra Variant 130', tags: ['base'] },
    { name: 'Extra Variant 131', tags: ['base'] },
    { name: 'Extra Variant 132', tags: ['base'] },
    { name: 'Extra Variant 133', tags: ['base'] },
    { name: 'Extra Variant 134', tags: ['base'] },
    { name: 'Extra Variant 135', tags: ['base'] },
    { name: 'Extra Variant 136', tags: ['base'] },
    { name: 'Extra Variant 137', tags: ['base'] },
    { name: 'Extra Variant 138', tags: ['base'] },
    { name: 'Extra Variant 139', tags: ['base'] },
    { name: 'Extra Variant 140', tags: ['base'] },
    { name: 'Extra Variant 141', tags: ['base'] },
    { name: 'Extra Variant 142', tags: ['base'] },
    { name: 'Extra Variant 143', tags: ['base'] },
    { name: 'Extra Variant 144', tags: ['base'] },
    { name: 'Extra Variant 145', tags: ['base'] },
    { name: 'Extra Variant 146', tags: ['base'] },
    { name: 'Extra Variant 147', tags: ['base'] },
    { name: 'Extra Variant 148', tags: ['base'] },
    { name: 'Extra Variant 149', tags: ['base'] },
    { name: 'Extra Variant 150', tags: ['base'] },
    { name: 'Extra Variant 151', tags: ['base'] },
    { name: 'Extra Variant 152', tags: ['base'] },
    { name: 'Extra Variant 153', tags: ['base'] },
    { name: 'Extra Variant 154', tags: ['base'] },
    { name: 'Extra Variant 155', tags: ['base'] },
    { name: 'Extra Variant 156', tags: ['base'] },
    { name: 'Extra Variant 157', tags: ['base'] },
    { name: 'Extra Variant 158', tags: ['base'] },
    { name: 'Extra Variant 159', tags: ['base'] },
    { name: 'Extra Variant 160', tags: ['base'] },
    { name: 'Extra Variant 161', tags: ['base'] },
    { name: 'Extra Variant 162', tags: ['base'] },
    { name: 'Extra Variant 163', tags: ['base'] },
    { name: 'Extra Variant 164', tags: ['base'] },
    { name: 'Extra Variant 165', tags: ['base'] },
    { name: 'Extra Variant 166', tags: ['base'] },
    { name: 'Extra Variant 167', tags: ['base'] },
    { name: 'Extra Variant 168', tags: ['base'] },
    { name: 'Extra Variant 169', tags: ['base'] },
    { name: 'Extra Variant 170', tags: ['base'] },
    { name: 'Extra Variant 171', tags: ['base'] },
    { name: 'Extra Variant 172', tags: ['base'] },
    { name: 'Extra Variant 173', tags: ['base'] },
    { name: 'Extra Variant 174', tags: ['base'] },
    { name: 'Extra Variant 175', tags: ['base'] },
    { name: 'Extra Variant 176', tags: ['base'] },
    { name: 'Extra Variant 177', tags: ['base'] },
    { name: 'Extra Variant 178', tags: ['base'] },
    { name: 'Extra Variant 179', tags: ['base'] },
    { name: 'Extra Variant 180', tags: ['base'] },
    { name: 'Extra Variant 181', tags: ['base'] },
    { name: 'Extra Variant 182', tags: ['base'] },
    { name: 'Extra Variant 183', tags: ['base'] },
  ],
}

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
