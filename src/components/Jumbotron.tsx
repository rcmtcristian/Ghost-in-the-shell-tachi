import React, { useEffect, useState } from "react";
import { preloadFonts } from "../lib/utils.js";
import { TypeShuffle } from "../lib/typeShuffle.js";

function jumbotron(): JSX.Element {
  const handleLearnMore: () => void = () => {
    const element: Element | null = document.querySelector(".sound-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().top ?? 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // preload fonts
    preloadFonts("biu0hfr").then(() => {
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // remove loading class
      document.body.classList.remove("loading");

      // select text element
      const textElement = document.querySelector(".content");

      // initialize TypeShuffle
      const ts = new TypeShuffle(textElement);

      // trigger effect
      ts.trigger("fx1");

      // select all effect buttons
      [...document.querySelectorAll(".effects > button")].forEach((button) => {
        // add click event listener
        button.addEventListener("click", () => {
          // trigger effect
          ts.trigger(`fx${button.dataset.fx}`);
        });
      });
    }
  }, [isLoaded]);

  return (
    <div className="jumbotron-section wrapper">
      <main>
        {isLoaded && (
          <dl className="content">
            <dd>
              Introducing the Tachikoma, the cutting-edge walker robot that
              combines advanced artificial intelligence with powerful, agile
              mobility. Designed by the world-renowned scientists of Section 9,
              the Tachikoma is the ultimate machine for a wide range of tasks,
              from reconnaissance to combat. With its advanced AI system, the
              Tachikoma can think and learn on its own, adapting to any
              situation and making split-second decisions. Equipped with
              powerful legs and arms, the Tachikoma can move with incredible
              speed and agility, easily navigating through complex environments
              and scaling obstacles. Its durable frame and advanced sensors also
              make it resistant to damage and capable of detecting and analyzing
              a wide range of data, from environmental factors to enemy
              positions. The Tachikoma's advanced AI system also allows it to
              communicate with other Tachikomas and Section 9 members, sharing
              information and coordinating attacks. With its impressive arsenal
              of weapons, including machine guns, grenade launchers, and missile
              pods, the Tachikoma is a formidable force on the battlefield. But
              the Tachikoma is not just a machine of war. Its versatile design
              allows it to be used in a variety of industries, from construction
              to transportation. And with its friendly and curious personality,
              the Tachikoma can even serve as a loyal companion to its human
              operators. Experience the future of robotics with the Tachikoma.
              Order yours today and discover the possibilities of advanced AI
              and mobility. Tachikoma are as large as an average sedan, are
              painted blue and have four "eyes" fitted on the surface of their
              bodies. Three are on the "head" and one is beneath the "abdomen".
              Each eye has three pinholes, loosely resembling a bowling ball.
              These eyes sometimes become expressive in the typical anime style.
              Tachikoma are controlled by individual AIs, are capable of speech
              and generally exhibit a childish, curious, joyful and active
              personality, although they are consummate professionals in the
              field. They normally operate as independent units[4] and receive
              orders from human agents, but they can also be directly piloted
              from a cockpit in their abdomen.[5] The Tachikoma's design is
              implicitly based on that of the jumping spider in terms of
              bio-mechanical modelling, and system technical design was based on
              the Fuchikoma.[6] Tachikoma have two arms and four legs. They can
              move by walking, or they can drive at high speed by using the
              wheeled footpads on each of their four legs. Each wheel appears to
              be angled and omnidirectional, allowing the Tachikomas to move in
              any direction with their drive system, which can control all
              degrees of freedom in its task space. Other abilities of the
              Tachikoma include jumping great distances, sticking to vertical or
              inverted surfaces, engaging a thermoptic camouflage mechanism, and
              grappling/rappelling using their adhesive string launchers.
              Tachikoma maintain control of their legs while using wheels to
              drive down a road, and shift their weight around turns. They can
              also roll briefly on to two legs while driving to avoid an
              obstacle or pass through a narrow space. To make balance easier,
              they can move their heavy abdomens with a ball joint. Standard
              Tachikoma equipment includes a 7.62×51mm light machine gun mounted
              in the right arm, a secondary weapon hardpoint in the "snout" (a
              50 mm grenade launcher, capable of launching both explosive and
              gas grenades which can be replaced by a six-barrelled 12.7×99mm
              Gatling gun),[5] a universal cybernetic connector on an
              extensible, prehensile cable in the left arm, liquid wires that
              can be used for grappling, rappelling or for restraining purposes
              and a built-in thermoptic camouflage system.[7] As seen several
              times in the anime, they are lightly armored, resisting
              small-caliber firearms, though heavier automatic weapons or
              explosives can easily wreck them. Though they possess individual
              artificial intelligence, every night they are synchronized, so
              they start the next day with identical consciousnesses that are
              each the sum of their total collective experience and development.
              This leads to identity confusion, since each Tachikoma has the
              same memories. Though the Tachikoma have identical memories, their
              personalities and opinions are distinct. It is explained in the
              last episode of the first season that it is their curiosity that
              lets them be different from each other. These individual
              personalities are distinct among Tachikoma. One considers itself
              Batou's personal Tachikoma, which has a personality of a
              hyperactive child. It is special, given that Batou pampers it with
              natural oil and refuses to operate any other while on assignments.
              The second Tachikoma is more logical, acting as the straight man
              to the first. The third Tachikoma appears somewhat slower than the
              others, and at times has difficulty keeping up with the other
              Tachikomas when discussing such in-depth topics as what it means
              to be "alive". There is also a fourth Tachikoma with a distinctive
              personality, who is a bookworm and an intellectual. Its body was
              taken apart during the experimentation incident, but its AI has
              presumably been saved for further analysis. During finale of the
              first S.A.C. season, while all but three of the Tachikomas are
              either locked away in a lab or dismantled for study, three
              surviving Tachikoma units abandon their civilian posts to assist
              the Major and Batou.[8] Dr. Asuda is the government researcher who
              single-handedly developed the neurochip used in the Tachikomas' AI
              and is considered by the Tachikomas to be their father. In the
              episode "Afternoon of the Machines – PAT," Asuda tries
              unsuccessfully to defect from Japan, because as a state-funded
              scientist, he is not allowed to hold patents on his inventions.
              Following his re-capture, the Tachikoma who is with The Major and
              Batou asks whether Dr. Asuda is its father. Desiring to leave a
              record of his achievement, Asuda inserted a trace of himself in
              the Tachikomas' memory during their reconstruction post-season 1.
              To prevent another collapse in the AI structural integrity, he
              decided to delete this last bit of sentimentality. The Tachikoma's
              powerful legs and arms allow it to move with incredible speed and
              agility, effortlessly navigating through even the most complex
              environments. Its robust frame and state-of-the-art sensors make
              it highly resistant to damage and enable it to detect and analyze
              a broad range of data, including environmental factors and enemy
              positions. Moreover, the Tachikoma's advanced AI system allows it
              to communicate with other Tachikomas and Section 9 members
              seamlessly. It can share information and coordinate attacks,
              making it an exceptionally formidable force on the battlefield.
              The Tachikoma boasts an impressive array of weapons, including
              machine guns, grenade launchers, and missile pods, making it a
              force to be reckoned with in any combat situation. Despite its
              exceptional combat capabilities, the Tachikoma is not limited to
              warfare. Its versatile design allows it to be used in multiple
              industries, including construction, transportation, and more.
              Moreover, the Tachikoma's friendly and curious personality makes
              it an ideal companion to its human operators, offering unmatched
              loyalty and companionship. Experience the future of robotics with
              the Tachikoma. Order yours today and discover the possibilities of
              advanced AI and mobility. Be prepared to enter a new era of
              robotics with this cutting-edge machine that is sure to set a new
              standard in the industry.
            </dd>
          </dl>
        )}
      </main>
      <section className="offset">
        <button className="glass  ">
          {" "}
          <a className="link" onClick={handleLearnMore}>
            +
          </a>
        </button>
      </section>
    </div>
  );
}

export default jumbotron;
