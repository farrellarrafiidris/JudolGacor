const uangElement = document.getElementById('uang');
const bidInputElement = document.getElementById('bid-input');
const playButton = document.getElementById('play-button');
const gameOutputElement = document.getElementById('game-output');

let uang = 250000;

playButton.addEventListener('click', playGame);

function playGame() {
	const bid = parseInt(bidInputElement.value);

	if (uang < bid) {
		gameOutputElement.innerHTML = `
        
        <div style="text-align: center; margin: auto; font-weight: bold;">
                        <p>Maaf uang anda kurang untuk taruhan</p>
                    </div>
        `;
		return;
	}

	const angka1 = Math.floor(Math.random() * 10) + 1;
	const angka2 = Math.floor(Math.random() * 10) + 1;
	const angka3 = Math.floor(Math.random() * 10) + 1;

	gameOutputElement.innerHTML = `
    <div style="border: 1px; height: 100px; background-color:rgb(236, 236, 236); margin-bottom: 40px; display: flex; border-radius: 10px;">
                            <div style="margin:auto auto; border: 1px black; font-size: xx-large; animation-duration: 1000ms;">${angka1}</div>
                            <div style="margin:auto auto; border: 1px black; font-size: xx-large; animation-duration: 1000ms;">${angka2}</div>
                            <div style="margin:auto auto; border: 1px black; font-size: xx-large; animation-duration: 1000ms;">${angka3}</div>
                        </div>
		  
	`;

	if (angka1 === angka2 && angka2 === angka3) {
		uang += bid * 100;
		gameOutputElement.innerHTML += `
        <div style="text-align: center; margin: auto; font-weight: bold;">
                        <p>Selamat Bid Anda 2x, 1 Spin Rp${bid}</p>
                    </div>
        `;
	} else if (angka1 === angka2 || angka1 === angka3 || angka2 === angka3) {
		uang += bid * 0.5;
		gameOutputElement.innerHTML += `<div style="text-align: center; margin: auto;font-weight: bold;">
                        <p>Selamat Bid Anda 0.5x, 1 Spin Rp${bid}</p>
                    </div>`;
	} else {
		if (uang >= bid) {
			uang -= bid;
			gameOutputElement.innerHTML += `
            <div style="text-align: center; margin: auto; font-weight: bold;">
                        <p>Coba Lagi, 1 Spin Rp${bid}</p>
                    </div>`;
		} else {
			gameOutputElement.innerHTML += `
            <div style="text-align: center; margin: auto;font-weight: bold;">
                        <p>Uang anda tidak cukup untuk memasang taruhan.</p>
                    </div>`;
		}
	}

	uangElement.innerHTML = `Uang: Rp${uang}`;
}