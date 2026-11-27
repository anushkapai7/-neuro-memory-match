const levels = {
  easy: [
    ["Hippocampus","Memory formation","🧠","📚","The hippocampus is important for forming new declarative memories and helping consolidate information."],
    ["Cerebellum","Coordination & balance","🎯","🤸","The cerebellum helps coordinate the timing, precision and learning of movements."],
    ["Amygdala","Emotional processing","💗","😊","The amygdala contributes to processing emotional significance, especially threat-related cues."],
    ["Thalamus","Sensory relay","🔀","👁️","The thalamus relays and helps regulate most sensory information travelling to the cerebral cortex."],
    ["Hypothalamus","Homeostasis","🌡️","⚖️","The hypothalamus helps regulate temperature, hunger, thirst, endocrine activity and other homeostatic functions."],
    ["Medulla","Vital autonomic control","❤️","🫁","The medulla contains important networks involved in cardiovascular and respiratory regulation."]
  ],
  medium: [
    ["Nodes of Ranvier","Saltatory conduction","⚡","🚄","Action potentials are regenerated at nodes of Ranvier, allowing rapid saltatory conduction along myelinated axons."],
    ["Myelin sheath","Electrical insulation","🧵","🛡️","Myelin increases membrane resistance and decreases capacitance, helping impulses travel faster."],
    ["Synapse","Neuronal communication","🔗","💬","A synapse is a specialised junction through which one neuron communicates with another cell."],
    ["Dendrites","Receive incoming signals","🌿","📥","Dendrites receive synaptic inputs and convey graded electrical signals towards the neuron's cell body."],
    ["Corpus callosum","Hemispheric communication","🌉","↔️","The corpus callosum is a major bundle of commissural fibres connecting the cerebral hemispheres."],
    ["Reticular formation","Arousal & alertness","🌐","👀","Brainstem reticular networks contribute to wakefulness, attention and regulation of arousal."],
    ["Basal ganglia","Movement regulation","⚙️","🚶","Basal ganglia circuits help select, initiate and regulate movement, as well as support learning."],
    ["Prefrontal cortex","Executive functions","🧩","🗂️","Prefrontal regions contribute to planning, working memory, decision-making and cognitive control."]
  ],
  hard: [
    ["Substantia nigra","Dopaminergic motor modulation","⚫","🎛️","Dopamine-producing neurons in the substantia nigra pars compacta modulate basal ganglia motor circuits."],
    ["Broca's area","Speech production","🗣️","✍️","The left inferior frontal gyrus is commonly involved in speech and language production."],
    ["Wernicke's region","Language comprehension","👂","📖","Posterior temporal language regions contribute to mapping spoken and written language to meaning."],
    ["Locus coeruleus","Noradrenergic arousal","🔵","⚡","The locus coeruleus is a major source of brain noradrenaline and influences vigilance and attention."],
    ["Pyramidal neurons","Cortical output","🔺","📡","Pyramidal neurons are principal excitatory projection neurons in much of the cerebral cortex."],
    ["GABA","Major inhibitory transmitter","🧪","⛔","GABA is the principal inhibitory neurotransmitter in the mature mammalian central nervous system."],
    ["NMDA receptor","Synaptic plasticity","🔬","🌱","NMDA receptor activation contributes to calcium-dependent mechanisms involved in long-term synaptic plasticity."],
    ["Dorsal column","Fine touch & proprioception","🧍","🖐️","The dorsal column–medial lemniscus pathway carries discriminative touch, vibration and conscious proprioception."],
    ["Spinothalamic tract","Pain & temperature","🔥","🌡️","The anterolateral system carries pain and temperature information towards the thalamus."],
    ["PCC","Default mode network hub","🧭","🕸️","The posterior cingulate cortex is a prominent hub of the default mode network."],
    ["Insula","Interoceptive awareness","🫀","🪞","The insula integrates bodily signals and contributes to interoception, emotion and salience processing."],
    ["H-reflex","Spinal reflex excitability","🦵","📈","The H-reflex is an electrically evoked analogue of the monosynaptic stretch reflex and probes spinal circuitry."]
  ]
};

const screens = ["welcome-screen","game-screen","result-screen"];
let currentLevel = "easy", deck = [], flipped = [], matchedPairs = 0, moves = 0, score = 0;
let seconds = 0, timerId = null, lockBoard = false, started = false, toastTimeout = null;

const $ = id => document.getElementById(id);
const showScreen = id => screens.forEach(s => $(s).classList.toggle("hidden", s !== id));
const shuffle = array => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};
const formatTime = total => `${String(Math.floor(total/60)).padStart(2,"0")}:${String(total%60).padStart(2,"0")}`;

function startGame(level) {
  currentLevel = level;
  const pairs = levels[level];
  deck = shuffle(pairs.flatMap((pair,index) => [
    {pairId:index, type:"concept", label:pair[0], emoji:pair[2], tag:"CONCEPT"},
    {pairId:index, type:"function", label:pair[1], emoji:pair[3], tag:"FUNCTION"}
  ]));
  flipped = []; matchedPairs = 0; moves = 0; score = 0; seconds = 0;
  lockBoard = false; started = false;
  clearInterval(timerId); timerId = null;
  $("level-title").textContent = `${level[0].toUpperCase()+level.slice(1)} challenge`;
  $("moves").textContent = "0";
  $("matches").textContent = `0/${pairs.length}`;
  $("timer").textContent = "00:00";
  $("score").textContent = "0";
  $("remaining-label").textContent = `${pairs.length} pairs to go`;
  $("progress-fill").style.width = "0%";
  $("fact-box").classList.add("hidden");
  $("game-board").className = `game-board ${level}`;
  renderBoard();
  showScreen("game-screen");
}

function renderBoard() {
  const board = $("game-board");
  board.innerHTML = "";
  deck.forEach((card,index) => {
    const button = document.createElement("button");
    button.className = "memory-card";
    button.type = "button";
    button.dataset.index = index;
    button.setAttribute("aria-label", "Face-down memory card");
    button.innerHTML = `<span class="card-inner">
      <span class="card-face card-back">✦</span>
      <span class="card-face card-front">
        <span class="card-emoji">${card.emoji}</span>
        <strong>${escapeHTML(card.label)}</strong>
        <small>${card.tag}</small>
      </span></span>`;
    button.addEventListener("click", () => flipCard(index,button));
    board.appendChild(button);
  });
  board.style.gridTemplateColumns = `repeat(${currentLevel === "easy" ? 4 : 4}, minmax(0,1fr))`;
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function startTimer() {
  if (started) return;
  started = true;
  timerId = setInterval(() => {
    seconds++;
    $("timer").textContent = formatTime(seconds);
  },1000);
}

function flipCard(index,button) {
  if (lockBoard || button.classList.contains("flipped") || button.classList.contains("matched")) return;
  startTimer();
  button.classList.add("flipped");
  button.setAttribute("aria-label", `${deck[index].label}, ${deck[index].tag.toLowerCase()}`);
  flipped.push({index,button,card:deck[index]});
  if (flipped.length === 2) {
    moves++;
    $("moves").textContent = moves;
    const [first,second] = flipped;
    if (first.card.pairId === second.card.pairId && first.card.type !== second.card.type) {
      lockBoard = true;
      setTimeout(() => {
        first.button.classList.add("matched");
        second.button.classList.add("matched");
        first.button.classList.remove("flipped");
        second.button.classList.remove("flipped");
        first.button.disabled = true; second.button.disabled = true;
        matchedPairs++;
        score += Math.max(50, 100 - (moves - matchedPairs) * 5);
        $("matches").textContent = `${matchedPairs}/${levels[currentLevel].length}`;
        $("score").textContent = score;
        $("remaining-label").textContent = matchedPairs === levels[currentLevel].length ? "All pairs found!" : `${levels[currentLevel].length-matchedPairs} pairs to go`;
        $("progress-fill").style.width = `${matchedPairs/levels[currentLevel].length*100}%`;
        const fact = levels[currentLevel][first.card.pairId][4];
        $("fact-text").textContent = fact;
        $("fact-box").classList.remove("hidden");
        flipped = []; lockBoard = false;
        if (matchedPairs === levels[currentLevel].length) finishGame();
      },350);
    } else {
      lockBoard = true;
      setTimeout(() => {
        first.button.classList.remove("flipped");
        second.button.classList.remove("flipped");
        first.button.setAttribute("aria-label","Face-down memory card");
        second.button.setAttribute("aria-label","Face-down memory card");
        flipped = []; lockBoard = false;
      },950);
    }
  }
}

function finishGame() {
  clearInterval(timerId);
  const accuracy = Math.round((matchedPairs / Math.max(moves,1))*100);
  $("final-score").textContent = score;
  $("final-moves").textContent = moves;
  $("final-time").textContent = formatTime(seconds);
  $("final-accuracy").textContent = `${accuracy}%`;
  let heading = "Brilliant brainwork!";
  let message = "You connected every concept. Your neuroscience knowledge is growing!";
  if (moves <= levels[currentLevel].length + 2) message = "Incredible memory! You found the pairs with very few moves.";
  else if (accuracy < 45) message = "Well done for completing the challenge. Try again and see if you can improve your score!";
  $("result-heading").textContent = heading;
  $("result-message").textContent = message;
  showScreen("result-screen");
}

function restart() { startGame(currentLevel); }
function chooseLevel() { clearInterval(timerId); showScreen("welcome-screen"); }
function showToast(message) {
  const toast = $("toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimeout); toastTimeout = setTimeout(()=>toast.classList.remove("show"),1800);
}

document.querySelectorAll(".level-card").forEach(button => button.addEventListener("click",()=>startGame(button.dataset.level)));
$("back-button").addEventListener("click",chooseLevel);
$("restart-button").addEventListener("click",restart);
$("play-again-button").addEventListener("click",restart);
$("choose-level-button").addEventListener("click",chooseLevel);
