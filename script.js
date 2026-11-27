const levels = {
easy: [
["I help you catch a ball without having to calculate every movement. Who am I?","Cerebellum","01","The cerebellum compares intended movement with sensory feedback and fine-tunes timing, accuracy and coordination."],
["Light enters your eye, but I am the place where the optic nerve exits and no light can be detected.","Optic disc","02","The optic disc is where retinal ganglion-cell axons leave the eye. It has no photoreceptors, creating the physiological blind spot."],
["I help you see the colours of a rainbow, but I struggle when the light goes dim.","Cone cells","03","Cones support colour vision and high visual acuity, and function best in brighter light."],
["I help you see when the lights go out.","Rod cells","04","Rods are highly sensitive to light and are important for dim-light vision, but they do not mediate colour vision."],
["When you spin around and suddenly stop, I help detect the rotational movement of your head.","Semicircular canals","05","The semicircular canals detect angular acceleration. Endolymph movement deflects the cupula and bends sensory hair cells."],
["Close your eyes. You can still tell whether your arm is raised or lowered. Which sensory system helps you?","Proprioception","06","Proprioception provides information about body position and movement through receptors in muscles, tendons and joints."],
["I help you recognise what you see. Damage to me can affect visual processing.","Occipital cortex","07","The occipital cortex contains the primary visual cortex and surrounding visual-association areas that process visual information."],
["I help you form new memories. Without me, learning new information can become difficult.","Hippocampus","08","The hippocampus is essential for forming many types of new declarative memories and aspects of spatial memory."]
],
medium: [
["A neuron receives a strong enough stimulus. Suddenly, its membrane potential shoots upwards as sodium rushes inside. What has occurred?","Depolarisation during an action potential","12","Once threshold is reached, voltage-gated sodium channels open and sodium enters the neuron, producing the rapid rising phase of the action potential."],
["Two neurons communicate without physically touching. Chemical messengers cross the tiny gap between them. What is this junction called?","Chemical synapse","09","At a chemical synapse, neurotransmitter is released from the presynaptic terminal and binds to receptors on the postsynaptic cell."],
["Some nerve fibres transmit impulses much faster than others because the impulse appears to jump between gaps along the axon. What makes this possible?","Saltatory conduction","11","In myelinated axons, action potentials are regenerated at the nodes of Ranvier, making conduction faster and more energy-efficient."],
["A neuron fires an action potential and briefly cannot generate another one, no matter how strong the stimulus. What explains this?","Absolute refractory period","12","During the absolute refractory period, voltage-gated sodium channels are inactivated and cannot reopen until the membrane repolarises."],
["You enter a dark room from bright sunlight. Initially you can barely see, but gradually objects become visible. What is happening?","Dark adaptation","13","During dark adaptation, retinal sensitivity increases. Rod pathways become especially important as photopigments regenerate."],
["You walk while moving your head, yet your eyes automatically adjust to keep the visual scene stable. Which reflex is responsible?","Vestibulo-ocular reflex","14","The vestibulo-ocular reflex drives eye movements opposite to head movement, helping stabilise the image on the retina."],
["You stop noticing the smell of your perfume after wearing it for some time. What sensory phenomenon explains this?","Sensory adaptation","15","With sustained stimulation, the perceived response can decline over time. This helps the nervous system prioritise changes in the environment."],
["When you hear a sound, your brain uses tiny differences in when it reaches each ear to help locate its source. What is this called?","Interaural time difference","16","Interaural time differences are especially useful for locating low-frequency sounds in the horizontal plane."],
["Repeated activation of certain neural pathways makes communication between neurons more efficient. What phenomenon is involved?","Synaptic plasticity","17","Synaptic plasticity refers to activity-dependent changes in synaptic strength and is one of the cellular foundations of learning and memory."],
["You touch a hot object and quickly withdraw your hand before consciously processing the pain. What type of response is this?","Spinal reflex","18","A withdrawal reflex is organised through spinal circuits. The response can begin before conscious perception of the painful stimulus."],
["Looking at a bright light suppresses the secretion of a hormone that normally promotes sleep. Which hormone is affected?","Melatonin","19","Light information reaching the suprachiasmatic nucleus influences the pineal gland through a multisynaptic pathway and suppresses melatonin secretion."],
["When you focus on a particular object, surrounding visual stimuli become less prominent because neural responses are selectively suppressed. Which mechanism helps enhance contrast?","Lateral inhibition","20","Lateral inhibition allows strongly stimulated sensory pathways to suppress neighbouring pathways, enhancing contrast and sharpening boundaries."]
],
hard: [
["A patient reaches for a glass of water but repeatedly overshoots it. Their muscle strength is normal. What dysfunction could explain this?","Cerebellar dysfunction","21","Dysmetria—overshooting or undershooting a target—is a classic sign of cerebellar dysfunction. The cerebellum helps compare intended and actual movement."],
["A patient complains that red objects look faded when viewed through one eye. What should this make you suspect?","Possible optic neuropathy","22","Red desaturation can occur with optic nerve dysfunction. It is a clinical clue, not a diagnosis on its own."],
["A patient has headaches, blurred vision and an enlarged blind spot on perimetry. What finding could account for this?","Papilloedema","23","Papilloedema is optic-disc swelling associated with raised intracranial pressure and can enlarge the blind spot. It requires urgent clinical assessment."],
["A patient feels the room spinning after turning their head quickly. Which system may be involved?","Vestibular system dysfunction","24","The vestibular apparatus detects head movement and contributes to balance and gaze stabilisation. Vertigo has several possible causes."],
["A patient cannot identify the position of their toes when their eyes are closed, but can do so when looking. Which sensory ability may be impaired?","Impaired proprioceptive sensation","25","Joint-position sense is part of proprioception. Visual input can partly compensate when proprioceptive information is unreliable."],
["A patient struggles to distinguish red and green, but has otherwise normal visual acuity. What is a likely explanation?","Red-green colour vision deficiency","26","Red-green colour vision deficiencies commonly involve altered or absent function of particular cone photopigments. Visual acuity may remain normal."],
["An older adult walks reasonably well but becomes unstable when asked to perform mental arithmetic simultaneously. What phenomenon may be occurring?","Dual-task interference","27","Walking and a cognitive task compete for limited attentional resources. Increased instability during dual-tasking can reveal reduced balance reserve."],
["A participant initially struggles with mirror tracing but improves considerably after repeated attempts. What process is demonstrated?","Sensorimotor adaptation and motor learning","28","Practice can improve performance by updating sensorimotor predictions and refining motor commands. Mirror tracing is a classic visuomotor learning task."],
["A patient has difficulty recognising objects visually despite intact primary visual sensation. What type of dysfunction could explain this?","Higher-order visual processing dysfunction","29","Visual agnosia describes impaired recognition despite adequate basic visual input; the difficulty involves higher-order visual processing."],
["A patient experiences imbalance that worsens when visual input is removed. What broader problem might this suggest?","Possible proprioceptive or vestibular impairment","30","Balance depends on integrating visual, vestibular and somatosensory information. Removing vision can expose difficulty compensating for unreliable input from another system."]
]
};

const levelInfo = {
easy:["Level 1 · Easy: Know Your Brain","Identify the brain structure or sensory system from its mystery clue."],
medium:["Level 2 · Intermediate: The Neuro Detective","Use the scientific clue to identify the underlying neurophysiological principle."],
hard:["Level 3 · Hard: Clinical Neuro Detective","Interpret each clinical scenario and match it with the most likely neurophysiological explanation."]
};
const screens=["welcome-screen","game-screen","result-screen"];
let currentLevel="easy",deck=[],flipped=[],matchedPairs=0,moves=0,score=0,seconds=0,timerId=null,lockBoard=false,started=false;
const $=id=>document.getElementById(id);
const showScreen=id=>screens.forEach(s=>$(s).classList.toggle("hidden",s!==id));
const shuffle=a=>{const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
const formatTime=t=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`;
const safe=s=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function startGame(level){
 currentLevel=level;const pairs=levels[level];
 deck=shuffle(pairs.flatMap((p,i)=>[{pairId:i,type:"mystery",label:p[0]},{pairId:i,type:"answer",label:p[1],image:p[2]}]));
 flipped=[];matchedPairs=0;moves=0;score=0;seconds=0;lockBoard=false;started=false;clearInterval(timerId);timerId=null;
 $("level-title").textContent=levelInfo[level][0];$("level-subtitle").textContent=levelInfo[level][1];
 $("moves").textContent="0";$("matches").textContent=`0/${pairs.length}`;$("timer").textContent="00:00";$("score").textContent="0";
 $("remaining-label").textContent=`${pairs.length} pairs to go`;$("progress-fill").style.width="0%";$("fact-box").classList.add("hidden");
 $("game-board").className=`game-board ${level}`;renderBoard();showScreen("game-screen");
}
function renderBoard(){
 const board=$("game-board");board.innerHTML="";
 deck.forEach((card,i)=>{
  const b=document.createElement("button");b.className=`memory-card ${card.type}-card`;b.type="button";b.setAttribute("aria-label","Face-down memory card");
  const content=card.type==="mystery"
   ? `<span class="mystery-mark">?</span><strong class="mystery-text">${safe(card.label)}</strong><small>MYSTERY CLUE</small>`
   : `<img class="card-art" src="assets/illustration-${card.image}.jpg" alt="" loading="lazy"><strong>${safe(card.label)}</strong><small>ANSWER</small>`;
  b.innerHTML=`<span class="card-inner"><span class="card-face card-back"><span class="back-mark">✦</span><small>FLIP ME</small></span><span class="card-face card-front">${content}</span></span>`;
  b.addEventListener("click",()=>flipCard(i,b));board.appendChild(b);
 });
}
function startTimer(){if(started)return;started=true;timerId=setInterval(()=>{$("timer").textContent=formatTime(++seconds);},1000);}
function flipCard(i,b){
 if(lockBoard||b.classList.contains("flipped")||b.classList.contains("matched"))return;
 startTimer();b.classList.add("flipped");b.setAttribute("aria-label",deck[i].label);flipped.push({button:b,card:deck[i]});
 if(flipped.length!==2)return;
 moves++;$("moves").textContent=moves;const [a,c]=flipped;
 if(a.card.pairId===c.card.pairId&&a.card.type!==c.card.type){
  lockBoard=true;setTimeout(()=>{
   [a,c].forEach(x=>{x.button.classList.add("matched");x.button.classList.remove("flipped");x.button.disabled=true;});
   matchedPairs++;score+=Math.max(50,100-(moves-matchedPairs)*5);
   const total=levels[currentLevel].length;$("matches").textContent=`${matchedPairs}/${total}`;$("score").textContent=score;
   $("remaining-label").textContent=matchedPairs===total?"All pairs found!":`${total-matchedPairs} pairs to go`;
   $("progress-fill").style.width=`${matchedPairs/total*100}%`;
   $("fact-text").textContent=levels[currentLevel][a.card.pairId][3];$("fact-box").classList.remove("hidden");
   flipped=[];lockBoard=false;if(matchedPairs===total)finishGame();
  },420);
 }else{
  lockBoard=true;setTimeout(()=>{a.button.classList.remove("flipped");c.button.classList.remove("flipped");a.button.setAttribute("aria-label","Face-down memory card");c.button.setAttribute("aria-label","Face-down memory card");flipped=[];lockBoard=false;},1150);
 }
}
function finishGame(){
 clearInterval(timerId);$("final-score").textContent=score;$("final-moves").textContent=moves;$("final-time").textContent=formatTime(seconds);
 $("final-accuracy").textContent=`${Math.round(matchedPairs/Math.max(moves,1)*100)}%`;
 $("result-heading").textContent="Brilliant brainwork!";$("result-message").textContent="You solved every mystery. Your neuroscience knowledge is growing!";showScreen("result-screen");
}
function restart(){startGame(currentLevel);}
function chooseLevel(){clearInterval(timerId);showScreen("welcome-screen");}
document.querySelectorAll(".level-card").forEach(b=>b.addEventListener("click",()=>startGame(b.dataset.level)));
$("back-button").addEventListener("click",chooseLevel);$("restart-button").addEventListener("click",restart);
$("play-again-button").addEventListener("click",restart);$("choose-level-button").addEventListener("click",chooseLevel);
