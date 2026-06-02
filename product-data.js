globalThis.PRODUCT_DATA = [
  {
    id: "byou",
    name: "Build-Your-Own Uno",
    shortDescription: "Introducing the Build-Your-Own Arduino — a hands-on microcontroller kit designed to take learning beyond plug-and-play. Instead of buying a pre-assembled board, users build it themselves, gaining real-world electronics experience from the ground up.",
    fullDescription:
      "This board delivers the same functionality and compatibility as a standard Arduino-style development board — but with the added value of true hardware understanding. From soldering components to testing circuits, users don’t just program — they build the brain behind their projects. <br><br> This isn’t just a development board — it’s an experience. It bridges theory and practice, turning learners into builders and builders into innovators. <br><br> Build it. Program it. Understand it. Own it.",
    priceText: "₱412",
    images: [
      "assets/images/Products/BYOU/BLK.png",
      "assets/images/Products/BYOU/BLK_BACK.jpg"
    ],
    keyFeatures: [
      "ATMEGA328P microcontroller for UNO-compatible projects",
      "CH9340G USB-to-TTL interface for reliable serial programming",
      "LM7805 onboard regulation for stable 5V operation",
      "Hands-on board architecture for educational electronics"
    ],
    applications: [
      "Embedded systems and microcontroller classes",
      "Rapid robotics and sensor prototyping",
      "DIY automation projects and STEM workshops"
    ],
    shopeeLink: "https://shopee.ph/Build-Your-Own-Arduino-Uno-i.1638858368.48157353027?extraParams=%7B%22display_model_id%22%3A445652559827%2C%22model_selection_logic%22%3A3%7D",
    buyLink: "https://shopee.ph/Build-Your-Own-Arduino-Uno-i.1638858368.48157353027?extraParams=%7B%22display_model_id%22%3A445652559827%2C%22model_selection_logic%22%3A3%7D",
    documentation: "assets/docs/BYOU.pdf"
  },
  {
    id: "nano-expansion",
    name: "Nano Expansion Board",
    shortDescription: "Stop fighting messy wiring and start building smarter. This Arduino Expansion Board packs everything you need to power robotics and automation projects—cleanly and efficiently.",
    fullDescription:
      "Less clutter. More creativity. <br><br> Whether you're building robots, smart systems, or prototypes—this board helps you go from idea to reality, faster. <br><br> Nano Expansion Board provides organized wiring channels, motor driver support, and quick terminal access so your Nano-based robotics builds can move from wiring to testing faster.",
    priceText: "₱239",
    images: [
      "assets/images/Products/Nano Expansion/4.jpg",
      "assets/images/Products/Nano Expansion/2.jpg"
    ],
    keyFeatures: [
      "Dual Motor Power - Drive two DC motors with the integrated TB6612FNG driver (1.2A continuous, 3.2A peak) for smooth, reliable motion.",

      "Plug-and-Play Servos - Connect up to 12 servos (D2–D13) with built-in 5V and GND—no extra wiring required.",

      "Clean, Stable Connections - Full GND rails on every I/O pin make sensor and module wiring simple and rock-solid.",

      "Expand Without Limits - Four I2C connectors let you easily add displays, sensors, and more—no splitters needed.",

      "Flexible Power Options - Run it via VIN (6–12V) or 5V input to suit your project.",

      "Built-in Buzzer Support - Add sound alerts instantly with a dedicated passive buzzer pin."
    ],
    applications: [
      "Mini rover, Servo, and line-following robots",
      "Classroom electronics prototyping",
      "Fast hardware validation benches"
    ],
    shopeeLink: "https://shopee.ph/Nano-Expansion-Board-i.1638858368.53561381770?extraParams=%7B%22display_model_id%22%3A350990317283%2C%22model_selection_logic%22%3A3%7D",
    buyLink: "https://shopee.ph/Nano-Expansion-Board-i.1638858368.53561381770?extraParams=%7B%22display_model_id%22%3A350990317283%2C%22model_selection_logic%22%3A3%7D",
    documentation: "assets/docs/Nano Expansion.pdf"
  },
  {
    id: "rover-module",
    name: "Rover Robotics Module",
    shortDescription: "Introducing Rover, the ultimate robotics control module designed to make building mobile robots faster, cleaner, and smarter. Whether you’re a student, hobbyist, or robotics enthusiast, Rover combines all the essential interfaces and mounts in one compact platform.",
    fullDescription:
      "Rover isn’t just a module — it’s a platform that simplifies robotics, letting you focus on programming, innovation, and experimentation rather than hardware headaches. <br><br> Build. Connect. Control. Innovate. With Rover, your robotic ideas come to life faster and smarter.",
    priceText: "₱269",
    images: [
      "assets/images/Products/Rover/1.png",
      "assets/images/Products/Rover/2.jpg",
      "assets/images/Products/Rover/3.jpg"
    ],
    keyFeatures: [
      "Plug & Play Sensors – Connect up to 3 ultrasonic sensors and 7 IR sensors without messy wiring.",

      "Wireless Ready – Add Bluetooth or other wireless modules for remote control and telemetry.",

      "Custom Control – Use DIP switches and a tactile button for mode selection and manual triggers.",

      "Motor & Buzzer Support – Mount your TB6612FNG motor driver and an active buzzer for full robot control.",

      "Flexible Power – Switch between internal or external power safely with the built-in jumper."
    ],
    applications: [
      "Remote controlled rover projects",
      "Autonomous robotics prototyping",
      "Sensor fusion and mobility experiments"
    ],

    shopeeLink: "https://shopee.ph/Rover-%E2%80%93-The-All-in-One-Robotics-Module-i.1638858368.47657348448?extraParams=%7B%22display_model_id%22%3A345990339852%2C%22model_selection_logic%22%3A3%7D",
    buyLink: "https://shopee.ph/Rover-%E2%80%93-The-All-in-One-Robotics-Module-i.1638858368.47657348448?extraParams=%7B%22display_model_id%22%3A345990339852%2C%22model_selection_logic%22%3A3%7D",
    documentation: "assets/docs/Rover.pdf"
  }
];

globalThis.getProductById = function getProductById(productId) {
  return globalThis.PRODUCT_DATA.find((product) => product.id === productId) || null;
};
