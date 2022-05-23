AFRAME.registerComponent("solar-system", {
  init: function () {
    const sceneEl = this.el;

    let currentPlanet = "";
    const info = sceneEl.querySelector("#info");
    const planet_name = sceneEl.querySelector("#planet_name");
    const planet_mass = sceneEl.querySelector("#planet_mass");
    const planet_vol = sceneEl.querySelector("#planet_vol");
    const planet_gravity = sceneEl.querySelector("#planet_gravity");
    const sun = sceneEl.querySelector("#sun");
    const spaceship = sceneEl.querySelector("#spaceship");
    const mercury = sceneEl.querySelector("#mercury");
    const venus = sceneEl.querySelector("#venus");
    const earth = sceneEl.querySelector("#earth");
    const mars = sceneEl.querySelector("#mars");
    const jupiter = sceneEl.querySelector("#jupiter");
    const saturn = sceneEl.querySelector("#saturn");
    const uranus = sceneEl.querySelector("#uranus");
    const neptune = sceneEl.querySelector("#neptune");

    info.object3D.visible = false;

    spaceship.addEventListener("mouseenter", function () {
      if (currentPlanet != "spaceship") {
        info.object3D.visible = true;
        planet_name.setAttribute("value", "Nave espacial");
        planet_mass.setAttribute("value", "Clique para retornar");
        planet_vol.setAttribute("value", "");
        planet_gravity.setAttribute("value", "");
        currentPlanet = "spaceship";
      }
    });
    spaceship.addEventListener("mouseleave", function () {
      setTimeout(() => {
        if (currentPlanet == "spaceship") {
          info.object3D.visible = false;
        }
      }, 1000);
    });

    const attachToPlanet = (planetEl, name, mass, vol, gravity) => {
      planetEl.addEventListener("mouseenter", function () {
        if (currentPlanet != name) {
          info.object3D.visible = true;
          planet_name.setAttribute("value", name);
          planet_mass.setAttribute("value", "Massa: " + mass + " kg");
          planet_vol.setAttribute("value", "Volume: " + vol + " km^3");
          planet_gravity.setAttribute(
            "value",
            "Gravidade: " + gravity + " m/s^2"
          );
          currentPlanet = name;
        }
      });
      planetEl.addEventListener("mouseleave", function () {
        setTimeout(() => {
          if (currentPlanet == name) {
            info.object3D.visible = false;
          }
        }, 1000);
      });
    };

    attachToPlanet(sun, "Sol", "1,989×10^30", "1,412×10^18", "274");

    attachToPlanet(earth, "Terra", "5,9736×10^24", "1,08321×10^12", "9,780327");

    attachToPlanet(mercury, "Mercurio", "3,302×10^23", "6,083×10^10", "3,7");

    attachToPlanet(venus, "Venus", "4,869×10^24", "9,28x10 11", "8,87");

    attachToPlanet(mars, "Marte", "6,4185×10^23", "1,6318×10^11", "3,711");

    attachToPlanet(jupiter, "Jupiter", "1,899×10^27", "1,4313×10^15", "24.79");

    attachToPlanet(saturn, "Saturno", "5,688x10 26", "8,27x10 23", "10,44");

    attachToPlanet(uranus, "Urano", "8,686×10^25", "6,833×10^13", "8,69");

    attachToPlanet(neptune, "Netuno", "1,024×10^26", "6,254×10^13", "11,15");
  },
});
