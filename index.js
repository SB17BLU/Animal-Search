//Main code
document.querySelector("h1").onclick = function() {
  document.getElementById("animal_image").src = "Flamingo.jpg";
  document.getElementById("animal_info").innerHTML = "";
  document.getElementById("youtube_video").src = "";
  document.getElementById("animal_textbox").value = "";
}

//Functions
function search_animal() {
  var search = document.getElementById("animal_textbox").value;
  if (search.toLowerCase() == "koala" || search.toLowerCase() == "koalas"){
    document.getElementById("animal_image").src = "Koala.jpg"
    document.getElementById("animal_info").innerHTML = "<br><br><strong>Koala</strong>, (Phascolarctos cinereus), also called koala bear, tree-dwelling marsupial of coastal eastern Australia classified in the family Phascolarctidae (suborder Vombatiformes). <br><br> The koala is about 60 to 85 cm (24 to 33 inches) long and weighs up to 14 kg (31 pounds) in the southern part of its range (Victoria) but only about half that in subtropical Queensland to the north. Virtually tailless, the body is stout and gray, with a pale yellow or cream-coloured chest and mottling on the rump. <br><br> The broad face has a wide, rounded, leathery nose, small yellow eyes, and big fluffy ears. The feet are strong and clawed; the two inner digits of the front feet and the innermost digit of the hind feet are opposable for grasping. <br><br> Because of the animal’s superficial resemblance to a small bear, the koala is sometimes called, albeit erroneously, the koala bear."
    document.getElementById("youtube_video").src = "https://www.youtube.com/embed/JaCfzDFah5M"
  }
  else if (search.toLowerCase() == "flamingo" || search.toLowerCase() == "flamingos"){
    document.getElementById("animal_image").src = "flamingo2.jpg"
    document.getElementById("animal_info").innerHTML = "<br><br><strong>Flamingo</strong>, (order Phoenicopteriformes), any of six species of tall, pink wading birds with thick downturned bills. <br> <br> Flamingos have slender legs, long, graceful necks, large wings, and short tails. They range from about 90 to 150 cm (3 to 5 feet) tall. <br><br> Flamingos are highly gregarious birds. Flocks numbering in the hundreds may be seen in long, curving flight formations and in wading groups along the shore. On some of East Africa’s large lakes, more than a million lesser flamingos (Phoeniconaias minor) gather during the breeding season. <br><br> In flight, flamingos present a striking and beautiful sight, with legs and neck stretched out straight, looking like white and rosy crosses with black arms. No less interesting is the flock at rest, with their long necks twisted or coiled upon the body in any conceivable position. <br><br> Flamingos are often seen standing on one leg. Various reasons for this habit have been suggested, such as regulation of body temperature, conservation of energy, or merely to dry out the legs."
    document.getElementById("youtube_video").src = "https://www.youtube.com/embed/QLV_K7DVeyU"
  }
  else if (search.toLowerCase() == "panda" || search.toLowerCase() == "pandas"){
    document.getElementById("animal_image").src = "Panda.jpeg"
    document.getElementById("animal_info").innerHTML = "<br><br><strong>Giant panda</strong>, (Ailuropoda melanoleuca), also called panda bear, bearlike mammal inhabiting bamboo forests in the mountains of central China. Its striking coat of black and white, combined with a bulky body and round face, gives it a captivating appearance that has endeared it to people worldwide. <br><br> According to the IUCN Red List of Threatened Species, fewer than 1,900 pandas are thought to remain in the wild. <br><br> Large males may attain 1.8 metres (6 feet) in length and weigh more than 100 kg (220 pounds); females are usually smaller. Round black ears and black eye patches stand out against a white face and neck. Black limbs, tail, legs, and shoulders contrast with the white torso. The rear paws point inward, which gives pandas a waddling gait. <br><br> Pandas can easily stand on their hind legs and are commonly observed somersaulting, rolling, and dust-bathing. Although somewhat awkward as climbers, pandas readily ascend trees and, on the basis of their resemblance to bears, are probably capable of swimming. An unusual anatomic characteristic is an enlarged wrist bone that functions somewhat like a thumb, enabling pandas to handle food with considerable dexterity."
    document.getElementById("youtube_video").src = "https://www.youtube.com/embed/O5f-4h7L5ts"
  }
  else if (search.toLowerCase() == "elephant" || search.toLowerCase() == "elephants"){
    document.getElementById("animal_image").src = "Elephant.jpg"
    document.getElementById("animal_info").innerHTML = "<br><br><strong>Elephant</strong>, (family Elephantidae), largest living land animal, characterized by its long trunk (elongated upper lip and nose), columnar legs, and huge head with temporal glands and wide, flat ears. Elephants are grayish to brown in colour, and their body hair is sparse and coarse. <br> <br> They are found most often in savannas, grasslands, and forests but occupy a wide range of habitats, including deserts, swamps, and highlands in tropical and subtropical regions of Africa and Asia. <br><br> The African savanna, or bush, elephant (Loxodonta africana) weighs up to 8,000 kg (9 tons) and stands 3 to 4 metres (10 to 13 feet) at the shoulder. <br><br> The African forest elephant (Loxodonta cyclotis), which lives in rainforests, was recognized as a separate species in 2000 and is smaller than the savanna elephant. It has slender, downward-pointing tusks. <br><br>  The common belief that there existed “pygmy” and “water” elephants has no basis; they are probably varieties of the African forest elephants. "
    document.getElementById("youtube_video").src = "https://www.youtube.com/embed/Aw6GkiCvcWs"
  }
  else if (search.toLowerCase() == "river dolphin" || search.toLowerCase() == "river dolphins"){
    document.getElementById("animal_image").src = "RiverDolphin.jpg"
    document.getElementById("animal_info").innerHTML = "<br><br><strong>River dolphin</strong>, any of six species of small, usually freshwater aquatic mammals that are related to whales (order Cetacea). <br><br>These dolphins are found in rivers of south-central Asia, China, and South America and in the coastal waters of Brazil, Argentina, and Uruguay. <br><br>River dolphins have long beaks and rounded foreheads, distinguishing them from more familiar-looking dolphins such as the bottlenose dolphin of the family Delphinidae. <br><br> The ancestors of river dolphins were marine dolphins that invaded freshwater environments during high sea levels occurring near the end of the Miocene Epoch (23 million to 5.3 million years ago).  <br><br> Indian river dolphins (Platanista) are part of the family Platanistidae, whereas the genera Inia, Lipotes, and Pontoporia make up the family Iniidae. <br><br> Less athletic than most other dolphins, river dolphins do not make sensational leaps and dives. Instead, they spend much of their time at river bottoms, probing with sensitive snouts for mud-loving fish and crustaceans. <br><br> Despite having small eyes (Ganges and Indus river dolphins’ eyes even lack a lens), river dolphins navigate muddy waters with ease thanks to exquisite sonar—perhaps the best among all the cetaceans. They are often friendly and curious toward people."
    document.getElementById("youtube_video").src = "https://www.youtube.com/embed/ZCJgvabihQ8"
  }
}
