
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
    { name: 'Cinnabar', tags: ['new'] },
    { name: 'Cinnabar Slab', tags: ['new'] },
    { name: 'Cinnabar Stairs', tags: ['new'] },
    { name: 'Cinnabar Wall', tags: ['new'] },
    { name: 'Polished Cinnabar', tags: ['new'] },
    { name: 'Polished Cinnabar Slab', tags: ['new'] },
    { name: 'Polished Cinnabar Stairs', tags: ['new'] },
    { name: 'Polished Cinnabar Wall', tags: ['new'] },
    { name: 'Cinnabar Bricks', tags: ['new'] },
    { name: 'Cinnabar Brick Slab', tags: ['new'] },
    { name: 'Cinnabar Brick Stairs', tags: ['new'] },
    { name: 'Cinnabar Brick Wall', tags: ['new'] },
    { name: 'Chiseled Cinnabar', tags: ['new'] },
    { name: 'Sulfur', tags: ['new'] },
    { name: 'Sulfur Slab', tags: ['new'] },
    { name: 'Sulfur Stairs', tags: ['new'] },
    { name: 'Sulfur Wall', tags: ['new'] },
    { name: 'Polished Sulfur', tags: ['new'] },
    { name: 'Polished Sulfur Slab', tags: ['new'] },
    { name: 'Polished Sulfur Stairs', tags: ['new'] },
    { name: 'Polished Sulfur Wall', tags: ['new'] },
    { name: 'Sulfur Bricks', tags: ['new'] },
    { name: 'Sulfur Brick Slab', tags: ['new'] },
    { name: 'Sulfur Brick Stairs', tags: ['new'] },
    { name: 'Sulfur Brick Wall', tags: ['new'] },
    { name: 'Chiseled Sulfur', tags: ['new'] },
    { name: 'Potent Sulfur', tags: ['new'] },
    { name: 'Sulfur Spike', tags: ['new'] },
    { name: 'Cinnabar Ore', tags: ['new'] },
    { name: 'Sulfur Ore', tags: ['new'] },
    { name: 'Raw Cinnabar Block', tags: ['new'] },
    { name: 'Raw Sulfur Block', tags: ['new'] },
  ],

  construccion: [
    { name: 'Stone', tags: [] }, { name: 'Smooth Stone', tags: [] },
    { name: 'Stone Bricks', tags: [] }, { name: 'Cracked Stone Bricks', tags: [] },
    { name: 'Mossy Stone Bricks', tags: [] }, { name: 'Chiseled Stone Bricks', tags: [] },
    { name: 'Stone Slab', tags: [] }, { name: 'Stone Stairs', tags: [] },
    { name: 'Cobblestone', tags: [] }, { name: 'Cobblestone Slab', tags: [] },
    { name: 'Cobblestone Stairs', tags: [] }, { name: 'Cobblestone Wall', tags: [] },
    { name: 'Mossy Cobblestone', tags: [] }, { name: 'Mossy Cobblestone Slab', tags: [] },
    { name: 'Mossy Cobblestone Stairs', tags: [] }, { name: 'Mossy Cobblestone Wall', tags: [] },
    { name: 'Mossy Stone Brick Slab', tags: [] },
    { name: 'Bricks', tags: [] }, { name: 'Brick Slab', tags: [] },
    { name: 'Brick Stairs', tags: [] }, { name: 'Brick Wall', tags: [] },
    { name: 'Andesite', tags: [] }, { name: 'Polished Andesite', tags: [] },
    { name: 'Andesite Slab', tags: [] }, { name: 'Andesite Stairs', tags: [] }, { name: 'Andesite Wall', tags: [] },
    { name: 'Diorite', tags: [] }, { name: 'Polished Diorite', tags: [] },
    { name: 'Diorite Slab', tags: [] }, { name: 'Diorite Stairs', tags: [] }, { name: 'Diorite Wall', tags: [] },
    { name: 'Granite', tags: [] }, { name: 'Polished Granite', tags: [] },
    { name: 'Granite Slab', tags: [] }, { name: 'Granite Stairs', tags: [] }, { name: 'Granite Wall', tags: [] },
    { name: 'Deepslate', tags: [] }, { name: 'Polished Deepslate', tags: [] },
    { name: 'Cobbled Deepslate', tags: [] }, { name: 'Cobbled Deepslate Slab', tags: [] },
    { name: 'Cobbled Deepslate Stairs', tags: [] }, { name: 'Cobbled Deepslate Wall', tags: [] },
    { name: 'Deepslate Bricks', tags: [] }, { name: 'Cracked Deepslate Bricks', tags: [] },
    { name: 'Deepslate Brick Slab', tags: [] }, { name: 'Deepslate Brick Stairs', tags: [] }, { name: 'Deepslate Brick Wall', tags: [] },
    { name: 'Deepslate Tiles', tags: [] }, { name: 'Deepslate Tile Slab', tags: [] },
    { name: 'Deepslate Tile Stairs', tags: [] }, { name: 'Deepslate Tile Wall', tags: [] },
    { name: 'Tuff', tags: [] }, { name: 'Polished Tuff', tags: [] },
    { name: 'Tuff Slab', tags: [] }, { name: 'Tuff Stairs', tags: [] }, { name: 'Tuff Wall', tags: [] },
    { name: 'Tuff Bricks', tags: [] }, { name: 'Chiseled Tuff', tags: [] }, { name: 'Chiseled Tuff Bricks', tags: [] },
    { name: 'Sandstone', tags: [] }, { name: 'Cut Sandstone', tags: [] }, { name: 'Smooth Sandstone', tags: [] },
    { name: 'Sandstone Slab', tags: [] }, { name: 'Sandstone Stairs', tags: [] }, { name: 'Sandstone Wall', tags: [] },
    { name: 'Cut Sandstone Slab', tags: [] },
    { name: 'Red Sandstone', tags: [] }, { name: 'Cut Red Sandstone', tags: [] }, { name: 'Smooth Red Sandstone', tags: [] },
    { name: 'Red Sandstone Slab', tags: [] }, { name: 'Red Sandstone Stairs', tags: [] }, { name: 'Red Sandstone Wall', tags: [] },
    { name: 'Cut Red Sandstone Slab', tags: [] },
    { name: 'Calcite', tags: [] }, { name: 'Dripstone Block', tags: [] }, { name: 'Pointed Dripstone', tags: [] },
    { name: 'Moss Block', tags: [] }, { name: 'Moss Carpet', tags: [] },
    { name: 'Resin Bricks', tags: [] }, { name: 'Resin Brick Slab', tags: [] },
    { name: 'Resin Brick Stairs', tags: [] }, { name: 'Resin Brick Wall', tags: [] },
    { name: 'Chiseled Resin Bricks', tags: [] }, { name: 'Resin Clump', tags: [] },
    { name: 'Mud Bricks', tags: [] }, { name: 'Mud Brick Slab', tags: [] },
    { name: 'Mud Brick Stairs', tags: [] }, { name: 'Mud Brick Wall', tags: [] }, { name: 'Packed Mud', tags: [] },
    { name: 'Infested Stone', tags: [] }, { name: 'Infested Cobblestone', tags: [] },
    { name: 'Infested Stone Bricks', tags: [] }, { name: 'Infested Cracked Stone Bricks', tags: [] },
    { name: 'Infested Mossy Stone Bricks', tags: [] }, { name: 'Infested Chiseled Stone Bricks', tags: [] },
    { name: 'Infested Deepslate', tags: [] },
  ],

  madera: [
    { name: 'Oak Log', tags: [] }, { name: 'Stripped Oak Log', tags: [] }, { name: 'Oak Wood', tags: [] }, { name: 'Stripped Oak Wood', tags: [] },
    { name: 'Oak Planks', tags: [] }, { name: 'Oak Slab', tags: [] }, { name: 'Oak Stairs', tags: [] },
    { name: 'Oak Fence', tags: [] }, { name: 'Oak Fence Gate', tags: [] }, { name: 'Oak Door', tags: [] }, { name: 'Oak Trapdoor', tags: [] },
    { name: 'Oak Pressure Plate', tags: [] }, { name: 'Oak Button', tags: [] },
    { name: 'Oak Sign', tags: [] }, { name: 'Oak Hanging Sign', tags: [] }, { name: 'Oak Wall Sign', tags: [] }, { name: 'Oak Wall Hanging Sign', tags: [] },
    { name: 'Oak Shelf', tags: [] }, { name: 'Oak Sapling', tags: [] }, { name: 'Oak Leaves', tags: [] },
    { name: 'Spruce Log', tags: [] }, { name: 'Stripped Spruce Log', tags: [] }, { name: 'Spruce Wood', tags: [] }, { name: 'Stripped Spruce Wood', tags: [] },
    { name: 'Spruce Planks', tags: [] }, { name: 'Spruce Slab', tags: [] }, { name: 'Spruce Stairs', tags: [] },
    { name: 'Spruce Fence', tags: [] }, { name: 'Spruce Fence Gate', tags: [] }, { name: 'Spruce Door', tags: [] }, { name: 'Spruce Trapdoor', tags: [] },
    { name: 'Spruce Pressure Plate', tags: [] }, { name: 'Spruce Button', tags: [] },
    { name: 'Spruce Sign', tags: [] }, { name: 'Spruce Hanging Sign', tags: [] }, { name: 'Spruce Wall Sign', tags: [] }, { name: 'Spruce Wall Hanging Sign', tags: [] },
    { name: 'Spruce Shelf', tags: [] }, { name: 'Spruce Sapling', tags: [] }, { name: 'Spruce Leaves', tags: [] },
    { name: 'Birch Log', tags: [] }, { name: 'Stripped Birch Log', tags: [] }, { name: 'Birch Wood', tags: [] }, { name: 'Stripped Birch Wood', tags: [] },
    { name: 'Birch Planks', tags: [] }, { name: 'Birch Slab', tags: [] }, { name: 'Birch Stairs', tags: [] },
    { name: 'Birch Fence', tags: [] }, { name: 'Birch Fence Gate', tags: [] }, { name: 'Birch Door', tags: [] }, { name: 'Birch Trapdoor', tags: [] },
    { name: 'Birch Pressure Plate', tags: [] }, { name: 'Birch Button', tags: [] },
    { name: 'Birch Sign', tags: [] }, { name: 'Birch Hanging Sign', tags: [] }, { name: 'Birch Wall Sign', tags: [] }, { name: 'Birch Wall Hanging Sign', tags: [] },
    { name: 'Birch Shelf', tags: [] }, { name: 'Birch Sapling', tags: [] }, { name: 'Birch Leaves', tags: [] },
    { name: 'Jungle Log', tags: [] }, { name: 'Stripped Jungle Log', tags: [] }, { name: 'Jungle Wood', tags: [] }, { name: 'Stripped Jungle Wood', tags: [] },
    { name: 'Jungle Planks', tags: [] }, { name: 'Jungle Slab', tags: [] }, { name: 'Jungle Stairs', tags: [] },
    { name: 'Jungle Fence', tags: [] }, { name: 'Jungle Fence Gate', tags: [] }, { name: 'Jungle Door', tags: [] }, { name: 'Jungle Trapdoor', tags: [] },
    { name: 'Jungle Pressure Plate', tags: [] }, { name: 'Jungle Button', tags: [] },
    { name: 'Jungle Sign', tags: [] }, { name: 'Jungle Hanging Sign', tags: [] }, { name: 'Jungle Wall Sign', tags: [] }, { name: 'Jungle Wall Hanging Sign', tags: [] },
    { name: 'Jungle Shelf', tags: [] }, { name: 'Jungle Sapling', tags: [] }, { name: 'Jungle Leaves', tags: [] },
    { name: 'Acacia Log', tags: [] }, { name: 'Stripped Acacia Log', tags: [] }, { name: 'Acacia Wood', tags: [] }, { name: 'Stripped Acacia Wood', tags: [] },
    { name: 'Acacia Planks', tags: [] }, { name: 'Acacia Slab', tags: [] }, { name: 'Acacia Stairs', tags: [] },
    { name: 'Acacia Fence', tags: [] }, { name: 'Acacia Fence Gate', tags: [] }, { name: 'Acacia Door', tags: [] }, { name: 'Acacia Trapdoor', tags: [] },
    { name: 'Acacia Pressure Plate', tags: [] }, { name: 'Acacia Button', tags: [] },
    { name: 'Acacia Sign', tags: [] }, { name: 'Acacia Hanging Sign', tags: [] }, { name: 'Acacia Wall Sign', tags: [] }, { name: 'Acacia Wall Hanging Sign', tags: [] },
    { name: 'Acacia Shelf', tags: [] }, { name: 'Acacia Sapling', tags: [] }, { name: 'Acacia Leaves', tags: [] },
    { name: 'Dark Oak Log', tags: [] }, { name: 'Stripped Dark Oak Log', tags: [] }, { name: 'Dark Oak Wood', tags: [] }, { name: 'Stripped Dark Oak Wood', tags: [] },
    { name: 'Dark Oak Planks', tags: [] }, { name: 'Dark Oak Slab', tags: [] }, { name: 'Dark Oak Stairs', tags: [] },
    { name: 'Dark Oak Fence', tags: [] }, { name: 'Dark Oak Fence Gate', tags: [] }, { name: 'Dark Oak Door', tags: [] }, { name: 'Dark Oak Trapdoor', tags: [] },
    { name: 'Dark Oak Pressure Plate', tags: [] }, { name: 'Dark Oak Button', tags: [] },
    { name: 'Dark Oak Sign', tags: [] }, { name: 'Dark Oak Hanging Sign', tags: [] }, { name: 'Dark Oak Wall Sign', tags: [] }, { name: 'Dark Oak Wall Hanging Sign', tags: [] },
    { name: 'Dark Oak Shelf', tags: [] }, { name: 'Dark Oak Sapling', tags: [] }, { name: 'Dark Oak Leaves', tags: [] },
    { name: 'Mangrove Log', tags: [] }, { name: 'Stripped Mangrove Log', tags: [] }, { name: 'Mangrove Wood', tags: [] }, { name: 'Stripped Mangrove Wood', tags: [] },
    { name: 'Mangrove Planks', tags: [] }, { name: 'Mangrove Slab', tags: [] }, { name: 'Mangrove Stairs', tags: [] },
    { name: 'Mangrove Fence', tags: [] }, { name: 'Mangrove Fence Gate', tags: [] }, { name: 'Mangrove Door', tags: [] }, { name: 'Mangrove Trapdoor', tags: [] },
    { name: 'Mangrove Pressure Plate', tags: [] }, { name: 'Mangrove Button', tags: [] },
    { name: 'Mangrove Sign', tags: [] }, { name: 'Mangrove Hanging Sign', tags: [] }, { name: 'Mangrove Wall Sign', tags: [] }, { name: 'Mangrove Wall Hanging Sign', tags: [] },
    { name: 'Mangrove Shelf', tags: [] }, { name: 'Mangrove Propagule', tags: [] }, { name: 'Mangrove Roots', tags: [] }, { name: 'Mangrove Leaves', tags: [] },
    { name: 'Cherry Log', tags: [] }, { name: 'Stripped Cherry Log', tags: [] }, { name: 'Cherry Wood', tags: [] }, { name: 'Stripped Cherry Wood', tags: [] },
    { name: 'Cherry Planks', tags: [] }, { name: 'Cherry Slab', tags: [] }, { name: 'Cherry Stairs', tags: [] },
    { name: 'Cherry Fence', tags: [] }, { name: 'Cherry Fence Gate', tags: [] }, { name: 'Cherry Door', tags: [] }, { name: 'Cherry Trapdoor', tags: [] },
    { name: 'Cherry Pressure Plate', tags: [] }, { name: 'Cherry Button', tags: [] },
    { name: 'Cherry Sign', tags: [] }, { name: 'Cherry Hanging Sign', tags: [] }, { name: 'Cherry Wall Sign', tags: [] }, { name: 'Cherry Wall Hanging Sign', tags: [] },
    { name: 'Cherry Shelf', tags: [] }, { name: 'Cherry Sapling', tags: [] }, { name: 'Cherry Leaves', tags: [] },
    { name: 'Bamboo', tags: [] }, { name: 'Bamboo Block', tags: [] }, { name: 'Bamboo Planks', tags: [] },
    { name: 'Bamboo Slab', tags: [] }, { name: 'Bamboo Stairs', tags: [] },
    { name: 'Bamboo Fence', tags: [] }, { name: 'Bamboo Fence Gate', tags: [] }, { name: 'Bamboo Door', tags: [] }, { name: 'Bamboo Trapdoor', tags: [] },
    { name: 'Bamboo Pressure Plate', tags: [] }, { name: 'Bamboo Button', tags: [] },
    { name: 'Bamboo Sign', tags: [] }, { name: 'Bamboo Hanging Sign', tags: [] }, { name: 'Bamboo Wall Sign', tags: [] }, { name: 'Bamboo Wall Hanging Sign', tags: [] },
    { name: 'Bamboo Shelf', tags: [] }, { name: 'Bamboo Shoot', tags: [] },
    { name: 'Bamboo Mosaic', tags: [] }, { name: 'Bamboo Mosaic Slab', tags: [] }, { name: 'Bamboo Mosaic Stairs', tags: [] },
    { name: 'Bookshelf', tags: [] }, { name: 'Chiseled Bookshelf', tags: [] },
  ],

  naturaleza: [
    { name: 'Grass Block', tags: [] }, { name: 'Dirt', tags: [] }, { name: 'Coarse Dirt', tags: [] },
    { name: 'Dirt Path', tags: [] }, { name: 'Farmland', tags: [] }, { name: 'Rooted Dirt', tags: [] },
    { name: 'Gravel', tags: [] }, { name: 'Sand', tags: [] }, { name: 'Red Sand', tags: [] }, { name: 'Clay', tags: [] },
    { name: 'Mycelium', tags: [] }, { name: 'Podzol', tags: [] },
    { name: 'Snow', tags: [] }, { name: 'Snow Block', tags: [] },
    { name: 'Ice', tags: [] }, { name: 'Blue Ice', tags: [] }, { name: 'Packed Ice', tags: [] },
    { name: 'Allium', tags: [] }, { name: 'Azure Bluet', tags: [] }, { name: 'Cornflower', tags: [] },
    { name: 'Dandelion', tags: [] }, { name: 'Lily of the Valley', tags: [] }, { name: 'Lilac', tags: [] },
    { name: 'Poppy', tags: [] }, { name: 'Oxeye Daisy', tags: [] }, { name: 'Blue Orchid', tags: [] },
    { name: 'Pink Tulip', tags: [] }, { name: 'Orange Tulip', tags: [] }, { name: 'White Tulip', tags: [] }, { name: 'Red Tulip', tags: [] },
    { name: 'Wither Rose', tags: [] }, { name: 'Pink Petals', tags: [] }, { name: 'Torchflower', tags: [] }, { name: 'Torchflower Seeds', tags: [] },
    { name: 'Pitcher Plant', tags: [] }, { name: 'Spore Blossom', tags: [] },
    { name: 'Azalea', tags: [] }, { name: 'Azalea Leaves', tags: [] },
    { name: 'Flowering Azalea', tags: [] }, { name: 'Flowering Azalea Leaves', tags: [] },
    { name: 'Bush', tags: [] }, { name: 'Dead Bush', tags: [] }, { name: 'Fern', tags: [] }, { name: 'Large Fern', tags: [] },
    { name: 'Cactus', tags: [] }, { name: 'Cactus Flower', tags: [] },
    { name: 'Firefly Bush', tags: [] }, { name: 'Closed Eyeblossom', tags: [] },
    { name: 'Big Dripleaf', tags: [] }, { name: 'Big Dripleaf Stem', tags: [] }, { name: 'Small Dripleaf', tags: [] },
    { name: 'Cave Vines', tags: [] }, { name: 'Cave Vines Plant', tags: [] },
    { name: 'Hanging Roots', tags: [] }, { name: 'Leaf Litter', tags: [] }, { name: 'Glow Lichen', tags: [] },
    { name: 'Melon', tags: [] }, { name: 'Attached Melon Stem', tags: [] }, { name: 'Melon Stem', tags: [] },
    { name: 'Pumpkin', tags: [] }, { name: 'Attached Pumpkin Stem', tags: [] }, { name: 'Pumpkin Stem', tags: [] },
    { name: 'Carved Pumpkin', tags: [] }, { name: "Jack o'Lantern", tags: [] },
    { name: 'Beetroots', tags: [] }, { name: 'Carrots', tags: [] }, { name: 'Potatoes', tags: [] }, { name: 'Wheat', tags: [] }, { name: 'Cocoa', tags: [] },
    { name: 'Kelp', tags: [] }, { name: 'Kelp Plant', tags: [] }, { name: 'Dried Kelp Block', tags: [] },
    { name: 'Seagrass', tags: [] }, { name: 'Tall Seagrass', tags: [] }, { name: 'Sea Pickle', tags: [] },
    { name: 'Brown Mushroom Block', tags: [] }, { name: 'Red Mushroom Block', tags: [] }, { name: 'Mushroom Stem', tags: [] },
    { name: 'Brain Coral', tags: [] }, { name: 'Brain Coral Block', tags: [] }, { name: 'Brain Coral Fan', tags: [] }, { name: 'Brain Coral Wall Fan', tags: [] },
    { name: 'Dead Brain Coral Block', tags: [] }, { name: 'Dead Brain Coral Fan', tags: [] }, { name: 'Dead Brain Coral Wall Fan', tags: [] },
    { name: 'Bubble Coral', tags: [] }, { name: 'Bubble Coral Block', tags: [] }, { name: 'Bubble Coral Fan', tags: [] }, { name: 'Bubble Coral Wall Fan', tags: [] },
    { name: 'Dead Bubble Coral Block', tags: [] }, { name: 'Dead Bubble Coral Fan', tags: [] }, { name: 'Dead Bubble Coral Wall Fan', tags: [] },
    { name: 'Fire Coral', tags: [] }, { name: 'Fire Coral Block', tags: [] }, { name: 'Fire Coral Fan', tags: [] }, { name: 'Fire Coral Wall Fan', tags: [] },
    { name: 'Dead Fire Coral Block', tags: [] }, { name: 'Dead Fire Coral Fan', tags: [] }, { name: 'Dead Fire Coral Wall Fan', tags: [] },
    { name: 'Horn Coral', tags: [] }, { name: 'Horn Coral Block', tags: [] }, { name: 'Horn Coral Fan', tags: [] }, { name: 'Horn Coral Wall Fan', tags: [] },
    { name: 'Dead Horn Coral Block', tags: [] }, { name: 'Dead Horn Coral Fan', tags: [] }, { name: 'Dead Horn Coral Wall Fan', tags: [] },
    { name: 'Tube Coral', tags: [] }, { name: 'Tube Coral Block', tags: [] }, { name: 'Tube Coral Fan', tags: [] }, { name: 'Tube Coral Wall Fan', tags: [] },
    { name: 'Dead Tube Coral Block', tags: [] }, { name: 'Dead Tube Coral Fan', tags: [] }, { name: 'Dead Tube Coral Wall Fan', tags: [] },
    { name: 'Frogspawn', tags: [] }, { name: 'Bone Block', tags: [] },
  ],

  ores: [
    { name: 'Coal Ore', tags: [] }, { name: 'Deepslate Coal Ore', tags: [] }, { name: 'Block of Coal', tags: [] },
    { name: 'Iron Ore', tags: [] }, { name: 'Deepslate Iron Ore', tags: [] }, { name: 'Block of Iron', tags: [] },
    { name: 'Copper Ore', tags: [] }, { name: 'Deepslate Copper Ore', tags: [] }, { name: 'Raw Copper Block', tags: [] },
    { name: 'Copper Block', tags: [] }, { name: 'Cut Copper', tags: [] }, { name: 'Cut Copper Slab', tags: [] }, { name: 'Cut Copper Stairs', tags: [] },
    { name: 'Exposed Copper', tags: [] }, { name: 'Exposed Cut Copper', tags: [] }, { name: 'Exposed Cut Copper Slab', tags: [] }, { name: 'Exposed Cut Copper Stairs', tags: [] },
    { name: 'Weathered Copper', tags: [] }, { name: 'Weathered Cut Copper', tags: [] }, { name: 'Weathered Cut Copper Slab', tags: [] }, { name: 'Weathered Cut Copper Stairs', tags: [] },
    { name: 'Oxidized Copper', tags: [] }, { name: 'Oxidized Cut Copper', tags: [] }, { name: 'Oxidized Cut Copper Slab', tags: [] }, { name: 'Oxidized Cut Copper Stairs', tags: [] },
    { name: 'Copper Bulb', tags: [] }, { name: 'Exposed Copper Bulb', tags: [] }, { name: 'Weathered Copper Bulb', tags: [] }, { name: 'Oxidized Copper Bulb', tags: [] },
    { name: 'Copper Grate', tags: [] }, { name: 'Copper Door', tags: [] }, { name: 'Copper Trapdoor', tags: [] },
    { name: 'Copper Chain', tags: [] }, { name: 'Copper Bars', tags: [] },
    { name: 'Copper Torch', tags: [] }, { name: 'Copper Wall Torch', tags: [] }, { name: 'Copper Lantern', tags: [] },
    { name: 'Copper Chest', tags: [] }, { name: 'Copper Golem Statue', tags: [] },
    { name: 'Exposed Chiseled Copper', tags: [] }, { name: 'Exposed Copper Bars', tags: [] },
    { name: 'Exposed Copper Chain', tags: [] }, { name: 'Exposed Copper Chest', tags: [] },
    { name: 'Exposed Copper Door', tags: [] }, { name: 'Exposed Copper Golem Statue', tags: [] },
    { name: 'Exposed Copper Grate', tags: [] }, { name: 'Exposed Copper Lantern', tags: [] },
    { name: 'Exposed Copper Trapdoor', tags: [] }, { name: 'Exposed Lightning Rod', tags: [] },
    { name: 'Gold Ore', tags: [] }, { name: 'Deepslate Gold Ore', tags: [] }, { name: 'Gold Block', tags: [] }, { name: 'Raw Gold Block', tags: [] },
    { name: 'Diamond Ore', tags: [] }, { name: 'Deepslate Diamond Ore', tags: [] }, { name: 'Diamond Block', tags: [] },
    { name: 'Emerald Ore', tags: [] }, { name: 'Deepslate Emerald Ore', tags: [] }, { name: 'Emerald Block', tags: [] },
    { name: 'Lapis Ore', tags: [] }, { name: 'Deepslate Lapis Ore', tags: [] }, { name: 'Lapis Block', tags: [] },
    { name: 'Redstone Ore', tags: [] }, { name: 'Deepslate Redstone Ore', tags: [] }, { name: 'Redstone Block', tags: [] },
    { name: 'Quartz Block', tags: [] }, { name: 'Quartz Bricks', tags: [] }, { name: 'Quartz Slab', tags: [] },
    { name: 'Quartz Stairs', tags: [] }, { name: 'Smooth Quartz', tags: [] }, { name: 'Chiseled Quartz Block', tags: [] },
    { name: 'Amethyst Block', tags: [] }, { name: 'Amethyst Cluster', tags: [] }, { name: 'Budding Amethyst', tags: [] },
    { name: 'Small Amethyst Bud', tags: [] }, { name: 'Medium Amethyst Bud', tags: [] }, { name: 'Large Amethyst Bud', tags: [] },
    { name: 'Ancient Debris', tags: ['nether'] }, { name: 'Netherite Block', tags: [] },
  ],

  decoracion: [
    { name: 'Glass', tags: [] }, { name: 'Glass Pane', tags: [] },
    { name: 'Black Stained Glass', tags: [] }, { name: 'Black Stained Glass Pane', tags: [] },
    { name: 'Blue Stained Glass', tags: [] }, { name: 'Blue Stained Glass Pane', tags: [] },
    { name: 'Brown Stained Glass', tags: [] }, { name: 'Brown Stained Glass Pane', tags: [] },
    { name: 'Cyan Stained Glass', tags: [] }, { name: 'Cyan Stained Glass Pane', tags: [] },
    { name: 'Gray Stained Glass', tags: [] }, { name: 'Gray Stained Glass Pane', tags: [] },
    { name: 'Green Stained Glass', tags: [] }, { name: 'Green Stained Glass Pane', tags: [] },
    { name: 'Light Blue Stained Glass', tags: [] }, { name: 'Light Blue Stained Glass Pane', tags: [] },
    { name: 'Light Gray Stained Glass', tags: [] }, { name: 'Light Gray Stained Glass Pane', tags: [] },
    { name: 'Lime Stained Glass', tags: [] }, { name: 'Lime Stained Glass Pane', tags: [] },
    { name: 'Magenta Stained Glass', tags: [] }, { name: 'Magenta Stained Glass Pane', tags: [] },
    { name: 'Orange Stained Glass', tags: [] }, { name: 'Orange Stained Glass Pane', tags: [] },
    { name: 'Pink Stained Glass', tags: [] }, { name: 'Pink Stained Glass Pane', tags: [] },
    { name: 'Purple Stained Glass', tags: [] }, { name: 'Purple Stained Glass Pane', tags: [] },
    { name: 'Red Stained Glass', tags: [] }, { name: 'Red Stained Glass Pane', tags: [] },
    { name: 'White Stained Glass', tags: [] }, { name: 'White Stained Glass Pane', tags: [] },
    { name: 'Yellow Stained Glass', tags: [] }, { name: 'Yellow Stained Glass Pane', tags: [] },
    { name: 'Black Concrete', tags: [] }, { name: 'Black Concrete Powder', tags: [] },
    { name: 'Blue Concrete', tags: [] }, { name: 'Blue Concrete Powder', tags: [] },
    { name: 'Brown Concrete', tags: [] }, { name: 'Brown Concrete Powder', tags: [] },
    { name: 'Cyan Concrete', tags: [] }, { name: 'Cyan Concrete Powder', tags: [] },
    { name: 'Gray Concrete', tags: [] }, { name: 'Gray Concrete Powder', tags: [] },
    { name: 'Green Concrete', tags: [] }, { name: 'Green Concrete Powder', tags: [] },
    { name: 'Light Blue Concrete', tags: [] }, { name: 'Light Blue Concrete Powder', tags: [] },
    { name: 'Light Gray Concrete', tags: [] }, { name: 'Light Gray Concrete Powder', tags: [] },
    { name: 'Lime Concrete', tags: [] }, { name: 'Lime Concrete Powder', tags: [] },
    { name: 'Magenta Concrete', tags: [] }, { name: 'Magenta Concrete Powder', tags: [] },
    { name: 'Orange Concrete', tags: [] }, { name: 'Orange Concrete Powder', tags: [] },
    { name: 'Pink Concrete', tags: [] }, { name: 'Pink Concrete Powder', tags: [] },
    { name: 'Purple Concrete', tags: [] }, { name: 'Purple Concrete Powder', tags: [] },
    { name: 'Red Concrete', tags: [] }, { name: 'Red Concrete Powder', tags: [] },
    { name: 'White Concrete', tags: [] }, { name: 'White Concrete Powder', tags: [] },
    { name: 'Yellow Concrete', tags: [] }, { name: 'Yellow Concrete Powder', tags: [] },
    { name: 'Terracotta', tags: [] },
    { name: 'Black Terracotta', tags: [] }, { name: 'Blue Terracotta', tags: [] }, { name: 'Brown Terracotta', tags: [] },
    { name: 'Cyan Terracotta', tags: [] }, { name: 'Gray Terracotta', tags: [] }, { name: 'Green Terracotta', tags: [] },
    { name: 'Light Blue Terracotta', tags: [] }, { name: 'Light Gray Terracotta', tags: [] },
    { name: 'Lime Terracotta', tags: [] }, { name: 'Magenta Terracotta', tags: [] }, { name: 'Orange Terracotta', tags: [] },
    { name: 'Pink Terracotta', tags: [] }, { name: 'Purple Terracotta', tags: [] }, { name: 'Red Terracotta', tags: [] },
    { name: 'White Terracotta', tags: [] }, { name: 'Yellow Terracotta', tags: [] },
    { name: 'Black Glazed Terracotta', tags: [] }, { name: 'Blue Glazed Terracotta', tags: [] },
    { name: 'Brown Glazed Terracotta', tags: [] }, { name: 'Cyan Glazed Terracotta', tags: [] },
    { name: 'Gray Glazed Terracotta', tags: [] }, { name: 'Green Glazed Terracotta', tags: [] },
    { name: 'Light Blue Glazed Terracotta', tags: [] }, { name: 'Light Gray Glazed Terracotta', tags: [] },
    { name: 'Lime Glazed Terracotta', tags: [] }, { name: 'Magenta Glazed Terracotta', tags: [] },
    { name: 'Orange Glazed Terracotta', tags: [] }, { name: 'Pink Glazed Terracotta', tags: [] },
    { name: 'Purple Glazed Terracotta', tags: [] }, { name: 'Red Glazed Terracotta', tags: [] },
    { name: 'White Glazed Terracotta', tags: [] }, { name: 'Yellow Glazed Terracotta', tags: [] },
    { name: 'Black Carpet', tags: [] }, { name: 'Blue Carpet', tags: [] }, { name: 'Brown Carpet', tags: [] },
    { name: 'Cyan Carpet', tags: [] }, { name: 'Gray Carpet', tags: [] }, { name: 'Green Carpet', tags: [] },
    { name: 'Light Blue Carpet', tags: [] }, { name: 'Light Gray Carpet', tags: [] },
    { name: 'Lime Carpet', tags: [] }, { name: 'Magenta Carpet', tags: [] }, { name: 'Orange Carpet', tags: [] },
    { name: 'Pink Carpet', tags: [] }, { name: 'Purple Carpet', tags: [] }, { name: 'Red Carpet', tags: [] },
    { name: 'White Carpet', tags: [] }, { name: 'Yellow Carpet', tags: [] },
    { name: 'Decorated Pot', tags: [] }, { name: 'Flower Pot', tags: [] },
    { name: 'Black Banner', tags: [] }, { name: 'Blue Banner', tags: [] }, { name: 'Brown Banner', tags: [] },
    { name: 'Cyan Banner', tags: [] }, { name: 'Gray Banner', tags: [] }, { name: 'Green Banner', tags: [] },
    { name: 'Light Blue Banner', tags: [] }, { name: 'Light Gray Banner', tags: [] },
    { name: 'Lime Banner', tags: [] }, { name: 'Magenta Banner', tags: [] }, { name: 'Orange Banner', tags: [] },
    { name: 'Pink Banner', tags: [] }, { name: 'Purple Banner', tags: [] }, { name: 'Red Banner', tags: [] },
    { name: 'White Banner', tags: [] }, { name: 'Yellow Banner', tags: [] },
    { name: 'Candle', tags: [] }, { name: 'Black Candle', tags: [] }, { name: 'Blue Candle', tags: [] },
    { name: 'Brown Candle', tags: [] }, { name: 'Cyan Candle', tags: [] }, { name: 'Gray Candle', tags: [] },
    { name: 'Green Candle', tags: [] }, { name: 'Light Blue Candle', tags: [] }, { name: 'Light Gray Candle', tags: [] },
    { name: 'Lime Candle', tags: [] }, { name: 'Magenta Candle', tags: [] }, { name: 'Orange Candle', tags: [] },
    { name: 'Pink Candle', tags: [] }, { name: 'Purple Candle', tags: [] }, { name: 'Red Candle', tags: [] },
    { name: 'White Candle', tags: [] }, { name: 'Yellow Candle', tags: [] },
    { name: 'Black Bed', tags: [] }, { name: 'Blue Bed', tags: [] }, { name: 'Brown Bed', tags: [] },
    { name: 'Cyan Bed', tags: [] }, { name: 'Gray Bed', tags: [] }, { name: 'Green Bed', tags: [] },
    { name: 'Light Blue Bed', tags: [] }, { name: 'Light Gray Bed', tags: [] },
    { name: 'Lime Bed', tags: [] }, { name: 'Magenta Bed', tags: [] }, { name: 'Orange Bed', tags: [] },
    { name: 'Pink Bed', tags: [] }, { name: 'Purple Bed', tags: [] }, { name: 'Red Bed', tags: [] },
    { name: 'White Bed', tags: [] }, { name: 'Yellow Bed', tags: [] },
    { name: 'Black Shulker Box', tags: [] }, { name: 'Blue Shulker Box', tags: [] }, { name: 'Brown Shulker Box', tags: [] },
    { name: 'Cyan Shulker Box', tags: [] }, { name: 'Gray Shulker Box', tags: [] }, { name: 'Green Shulker Box', tags: [] },
    { name: 'Light Blue Shulker Box', tags: [] }, { name: 'Light Gray Shulker Box', tags: [] },
    { name: 'Lime Shulker Box', tags: [] }, { name: 'Magenta Shulker Box', tags: [] }, { name: 'Orange Shulker Box', tags: [] },
    { name: 'Pink Shulker Box', tags: [] }, { name: 'Purple Shulker Box', tags: [] }, { name: 'Red Shulker Box', tags: [] },
    { name: 'White Shulker Box', tags: [] }, { name: 'Yellow Shulker Box', tags: [] },
  ],

  redstone: [
    { name: 'Redstone Dust', tags: [] }, { name: 'Repeater', tags: [] }, { name: 'Comparator', tags: [] },
    { name: 'Observer', tags: [] }, { name: 'Piston', tags: [] }, { name: 'Sticky Piston', tags: [] },
    { name: 'Piston Head', tags: [] }, { name: 'Moving Piston', tags: [] },
    { name: 'Dispenser', tags: [] }, { name: 'Dropper', tags: [] }, { name: 'Hopper', tags: [] },
    { name: 'Activator Rail', tags: [] }, { name: 'Detector Rail', tags: [] }, { name: 'Powered Rail', tags: [] }, { name: 'Rail', tags: [] },
    { name: 'Lever', tags: [] }, { name: 'Redstone Torch', tags: [] }, { name: 'Redstone Wall Torch', tags: [] },
    { name: 'Stone Button', tags: [] }, { name: 'Stone Pressure Plate', tags: [] },
    { name: 'Heavy Weighted Pressure Plate', tags: [] }, { name: 'Light Weighted Pressure Plate', tags: [] },
    { name: 'Daylight Detector', tags: [] }, { name: 'Target', tags: [] },
    { name: 'Calibrated Sculk Sensor', tags: [] }, { name: 'Sculk Sensor', tags: [] },
    { name: 'Sculk Shrieker', tags: [] }, { name: 'Sculk', tags: [] }, { name: 'Sculk Vein', tags: [] }, { name: 'Sculk Catalyst', tags: [] },
    { name: 'Creaking Heart', tags: [] },
    { name: 'Command Block', tags: ['special'] }, { name: 'Chain Command Block', tags: ['special'] }, { name: 'Repeating Command Block', tags: ['special'] },
    { name: 'Crafter', tags: [] }, { name: 'Lightning Rod', tags: [] },
  ],

  nether: [
    { name: 'Netherrack', tags: ['nether'] }, { name: 'Magma Block', tags: ['nether'] },
    { name: 'Glowstone', tags: ['nether'] }, { name: 'Nether Gold Ore', tags: ['nether'] },
    { name: 'Nether Quartz Ore', tags: ['nether'] },
    { name: 'Soul Sand', tags: ['nether'] }, { name: 'Soul Soil', tags: ['nether'] },
    { name: 'Soul Torch', tags: ['nether'] }, { name: 'Soul Wall Torch', tags: ['nether'] },
    { name: 'Basalt', tags: ['nether'] }, { name: 'Polished Basalt', tags: ['nether'] }, { name: 'Smooth Basalt', tags: ['nether'] },
    { name: 'Basalt Slab', tags: ['nether'] }, { name: 'Basalt Stairs', tags: ['nether'] }, { name: 'Basalt Wall', tags: ['nether'] },
    { name: 'Blackstone', tags: ['nether'] }, { name: 'Polished Blackstone', tags: ['nether'] },
    { name: 'Polished Blackstone Bricks', tags: ['nether'] }, { name: 'Cracked Polished Blackstone Bricks', tags: ['nether'] },
    { name: 'Blackstone Slab', tags: ['nether'] }, { name: 'Blackstone Stairs', tags: ['nether'] }, { name: 'Blackstone Wall', tags: ['nether'] },
    { name: 'Gilded Blackstone', tags: ['nether'] },
    { name: 'Nether Bricks', tags: ['nether'] }, { name: 'Red Nether Bricks', tags: ['nether'] },
    { name: 'Cracked Nether Bricks', tags: ['nether'] }, { name: 'Chiseled Nether Bricks', tags: ['nether'] },
    { name: 'Nether Brick Slab', tags: ['nether'] }, { name: 'Nether Brick Stairs', tags: ['nether'] }, { name: 'Nether Brick Wall', tags: ['nether'] },
    { name: 'Crimson Nylium', tags: ['nether'] }, { name: 'Warped Nylium', tags: ['nether'] },
    { name: 'Crimson Stem', tags: ['nether'] }, { name: 'Stripped Crimson Stem', tags: ['nether'] },
    { name: 'Warped Stem', tags: ['nether'] }, { name: 'Stripped Warped Stem', tags: ['nether'] },
    { name: 'Crimson Hyphae', tags: ['nether'] }, { name: 'Warped Hyphae', tags: ['nether'] },
    { name: 'Crimson Planks', tags: ['nether'] }, { name: 'Crimson Slab', tags: ['nether'] },
    { name: 'Crimson Stairs', tags: ['nether'] }, { name: 'Crimson Fence', tags: ['nether'] }, { name: 'Crimson Fence Gate', tags: ['nether'] },
    { name: 'Crimson Door', tags: ['nether'] }, { name: 'Crimson Trapdoor', tags: ['nether'] },
    { name: 'Crimson Pressure Plate', tags: ['nether'] }, { name: 'Crimson Button', tags: ['nether'] },
    { name: 'Crimson Sign', tags: ['nether'] }, { name: 'Crimson Hanging Sign', tags: ['nether'] },
    { name: 'Crimson Wall Sign', tags: ['nether'] }, { name: 'Crimson Wall Hanging Sign', tags: ['nether'] }, { name: 'Crimson Shelf', tags: ['nether'] },
    { name: 'Warped Planks', tags: ['nether'] }, { name: 'Warped Slab', tags: ['nether'] },
    { name: 'Warped Stairs', tags: ['nether'] }, { name: 'Warped Fence', tags: ['nether'] }, { name: 'Warped Fence Gate', tags: ['nether'] },
    { name: 'Warped Door', tags: ['nether'] }, { name: 'Warped Trapdoor', tags: ['nether'] },
    { name: 'Warped Pressure Plate', tags: ['nether'] }, { name: 'Warped Button', tags: ['nether'] },
    { name: 'Warped Sign', tags: ['nether'] }, { name: 'Warped Hanging Sign', tags: ['nether'] },
    { name: 'Warped Wall Sign', tags: ['nether'] }, { name: 'Warped Wall Hanging Sign', tags: ['nether'] }, { name: 'Warped Shelf', tags: ['nether'] },
    { name: 'Crimson Roots', tags: ['nether'] }, { name: 'Warped Roots', tags: ['nether'] },
    { name: 'Crimson Fungus', tags: ['nether'] }, { name: 'Warped Fungus', tags: ['nether'] },
    { name: 'Warped Wart Block', tags: ['nether'] }, { name: 'Nether Wart Block', tags: ['nether'] },
    { name: 'Shroomlight', tags: ['nether'] },
    { name: 'Crying Obsidian', tags: ['nether'] },
  ],

  end: [
    { name: 'End Stone', tags: ['end'] }, { name: 'End Stone Bricks', tags: ['end'] },
    { name: 'End Stone Brick Slab', tags: ['end'] }, { name: 'End Stone Brick Stairs', tags: ['end'] }, { name: 'End Stone Brick Wall', tags: ['end'] },
    { name: 'End Portal Frame', tags: ['end', 'special'] }, { name: 'End Portal', tags: ['end', 'special'] },
    { name: 'Dragon Egg', tags: ['end', 'special'] }, { name: 'Dragon Head', tags: ['end', 'special'] }, { name: 'Dragon Wall Head', tags: ['end', 'special'] },
    { name: 'End Rod', tags: ['end'] },
    { name: 'Purpur Block', tags: ['end'] }, { name: 'Purpur Pillar', tags: ['end'] },
    { name: 'Purpur Slab', tags: ['end'] }, { name: 'Purpur Stairs', tags: ['end'] },
    { name: 'Chorus Plant', tags: ['end'] }, { name: 'Chorus Flower', tags: ['end'] },
    { name: 'Ender Chest', tags: ['end', 'special'] },
  ],

  especiales: [
    { name: 'Bedrock', tags: ['special'] }, { name: 'Barrier', tags: ['special'] },
    { name: 'Structure Block', tags: ['special'] }, { name: 'Jigsaw', tags: ['special'] },
    { name: 'Light', tags: ['special'] }, { name: 'Spawner', tags: ['special'] },
    { name: 'Beacon', tags: ['special'] }, { name: 'Conduit', tags: ['special'] },
    { name: 'Heavy Core', tags: ['special'] }, { name: 'Trial Spawner', tags: ['special'] },
    { name: 'Vault', tags: ['special'] },
    { name: 'Enchanting Table', tags: ['special'] }, { name: 'Anvil', tags: ['special'] },
    { name: 'Chipped Anvil', tags: ['special'] }, { name: 'Damaged Anvil', tags: ['special'] },
    { name: 'Brewing Stand', tags: ['special'] }, { name: 'Cauldron', tags: ['special'] },
    { name: 'Chest', tags: [] }, { name: 'Barrel', tags: [] },
    { name: 'Furnace', tags: [] }, { name: 'Blast Furnace', tags: [] },
    { name: 'Cartography Table', tags: [] }, { name: 'Fletching Table', tags: [] },
    { name: 'Loom', tags: [] }, { name: 'Composter', tags: [] },
    { name: 'Grindstone', tags: [] }, { name: 'Lectern', tags: [] },
    { name: 'Bell', tags: [] }, { name: 'Campfire', tags: [] },
    { name: 'Lantern', tags: [] }, { name: 'Lodestone', tags: [] },
    { name: 'Dried Ghast', tags: [] },
  ],

  variantes: [
    { name: 'Polished Andesite Slab', tags: [] }, { name: 'Polished Andesite Stairs', tags: [] },
    { name: 'Polished Blackstone Slab', tags: ['nether'] }, { name: 'Polished Blackstone Stairs', tags: ['nether'] },
    { name: 'Polished Deepslate Slab', tags: [] }, { name: 'Polished Deepslate Stairs', tags: [] },
    { name: 'Polished Diorite Slab', tags: [] }, { name: 'Polished Diorite Stairs', tags: [] },
    { name: 'Polished Granite Slab', tags: [] }, { name: 'Polished Granite Stairs', tags: [] },
    { name: 'Polished Tuff Slab', tags: [] }, { name: 'Polished Tuff Stairs', tags: [] },
  ],
};


/* ── State ──────────────────────────────────────────────────── */
let currentLang = 'es';
const STORAGE_KEY = 'mc262_checked_blocks';

/* ── Helpers ────────────────────────────────────────────────── */
function translateBlockName(name) {
  if (currentLang !== 'es') return name;
  return namesTranslationEs[name] || name;
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
const supabaseClient = (typeof supabase !== 'undefined' && typeof SUPABASE_URL !== 'undefined' && typeof SUPABASE_ANON_KEY !== 'undefined')
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

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
