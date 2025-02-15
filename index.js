// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)

// have the NPC start walking east immediately
// npc.walkEast()

// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

npc.walkNorth(1400, () => {
    npc.walkEast(1200, () => {
        npc.walkSouth(300, () => {
            npc.walkEast(1500, () => {
                npc.walkSouth(1500, () => {
                    npc.walkWest(2700, () => {
                        npc.walkNorth(400, () => {
                        })
                    })
                })
            })
        })
    })
})

/* 
// Bonus: Testing 'Detect Collisions'

    Collision Logic: 
    Player disappears when a collision is made with npc
    if () remove player with .remove() ? do nothing

    if (
    pc.x < npc.x + npc.w &&
    pc.x + pc.w > npc.x &&
    pc.y < npc.y + npc.h &&
    pc.h + pc.y > npc.y
    ) {
        querySelector
        .remove()

        // Find an element with a src that contains a string within that attribute and remove it
        document.querySelector('[src*="green-character"]').remove()
    }

// Set a flag and while loop to run functions until a collision is detected
let noCollisionsDetected = true;
while(noCollisionsDetected) {
    collisionDetected()
}

// Function to detect collisions, change flag to false when collision is detected
function collisionDetected() {
    if (
        pc.x < npc.x + npc.w &&
        pc.x + pc.w > npc.x &&
        pc.y < npc.y + npc.h &&
        pc.h + pc.y > npc.y
        ) {
            document.querySelector('[src*="green-character"]').remove()
            return noCollisionsDetected = false;
        }
}
*/