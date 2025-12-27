// DESTINATION DATA
const tourData = [
    { title: "Lalibela", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bete_Giyorgis_Lalibela_Ethiopia.jpg", loc: "The Rock Churches" },
    { title: "Simien Mountains", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Simien_Mountains_Ethiopia.jpg", loc: "North Gondar" },
    { title: "Gonder", img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Fasil_Ghebbi_01.jpg", loc: "Fasil Ghebbi" },
    { title: "Aksum", img: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Stele_Aksum_Ethiopia.jpg", loc: "Stelae Park" },
    { title: "Bale Mountains", img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bale_Mountains_Park.jpg", loc: "Alpine Wildlife" },
    { title: "Tis Abay", img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Blue_Nile_Falls.jpg", loc: "Blue Nile Falls" },
    { title: "Harar", img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Harar_gate.jpg", loc: "The Walled City" },
    { title: "Sof Omar Cave", img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Sof_Omar_Cave.jpg", loc: "Natural Wonders" },
    { title: "Bishoftu Lake", img: "https://upload.wikimedia.org/wikipedia/commons/8/87/Bishoftu_Lake.jpg", loc: "Crater Lakes" },
    { title: "Abay Lake", img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Lake_Chamo_Ethiopia.jpg", loc: "Arba Minch Area" }
];

// INITIALIZE
document.addEventListener("DOMContentLoaded", () => {
    renderDestinations();
    initParticles();
});

// RENDER CARDS
function renderDestinations() {
    const container = document.getElementById('tour-container');
    if(!container) return;

    container.innerHTML = tourData.map(item => `
        <div class="glass-card fade-in">
            <div style="height: 220px; overflow: hidden;">
                <img src="${item.img}" style="width: 100%; hieght: 100%; object-fit: cover;">
            </div>
            <div style="padding: 1.5rem;">
                <h4 style="font-weight: 900; text-transform: uppercase; font-size: 1.1rem;">${item.title}</h4>
                <p style="color: #2ecc71; font-size: 10px; font-weight: 700; text-transform: uppercase; margin-top: 5px;">${item.loc}</p>
            </div>
        </div>
    `).join('');
}

// BACKGROUND ANIMATION
function initParticles() {
    const canvas = document.getElementById('bg-animation');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = Array.from({ length: 40 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2
    }));

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(46, 204, 113, 0.4)';
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}