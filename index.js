const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji(){
   let response = await fetch("https://emoji-api.com/emojis?access_key=c7301e4e918fb9200af7730d5e73268f48b40e78")

   data = await response.json();

    for (let i=1; i < 1500; i++) { 
        emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }
}
 
getEmoji(); 


btnEl.addEventListener("click", () => {
   const randomNum = Math.floor(Math.random() * emoji.length);
   btnEl.innerText = emoji[randomNum].emojiName;
   emojiNameEl.innerText= emoji[randomNum].emojiCode;
});
