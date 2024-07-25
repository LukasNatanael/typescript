const sendSpaceShip = (name, captain) => {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada para uma missão.`);
    return spaceship;
};
const accelerate = (targetSpeed, spaceship) => {
    if (targetSpeed < spaceship.speed) {
        alert(`Reducing speed to ${targetSpeed}km/h`);
    }
    else if (targetSpeed > spaceship.speed) {
        alert(`Increasing speed to ${targetSpeed}km/h`);
    }
    else {
        alert(`Maintaining speed at ${targetSpeed}km/h`);
    }
};
const spaceshipName = prompt('Inform the spaceship name: ');
const spaceshipCaptain = prompt('Inform the spaceship captain: ');
const spaceship = sendSpaceShip(spaceshipName, spaceshipCaptain);
const spaceshipSpeed = Number(prompt('Inform the spaceship speed: '));
accelerate(spaceshipSpeed, spaceship);
