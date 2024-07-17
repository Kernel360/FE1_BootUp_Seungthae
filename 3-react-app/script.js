const directDomControl  = () => {
  const container = "container";
  const boxList = [];
  const bgColorClassList = ["bg-red", "bg-green", "bg-blue"];
  const textStyleClassList = [
    "text-bold",
    "text-italic",
    "text-strike",
    "text-underline",
  ];
  const $container = document.getElementById(container);
  const allBtnList = [];

  const createElement = (type) => {
    if (!type) {
      return null;
    }

    const element = document.createElement(type);
    return element;
  };

  const addText = (element, text) => {
    if (!element || !text) {
      return null;
    }

    if (Array.isArray(element)) {
      for (const el of element) {
        el.innerHTML = text;
      }
      return;
    }

    element.innerHTML = text;
  };

  const setId = (element, id) => {
    if (!element || !id) {
      return null;
    }

    element.setAttribute("id", id);
  };

  const setClass = (element, className) => {
    if (!element || !className) {
      return null;
    }

    if (Array.isArray(element)) {
      for (const el of element) {
        el.className = className;
      }
      return;
    }

    element.className = className;
  };

  const createAndSetElement = (type = null, option = {}) => {
    const { id, className, text } = option;
    const element = createElement(type);
    addText(element, text);
    setId(element, id);
    setClass(element, className);
    return element;
  };

  const insertElement = (parent, child) => {
    if (Array.isArray(child)) {
      for (const element of child) {
        parent.appendChild(element);
      }
      return;
    }
    parent.appendChild(child);
  };

  const setInput = () => {
    const inputBox = createElement("div");
    const idBox = createElement("div");
    const classBox = createElement("div");
    const queryBox = createElement("div");
    const idSpan = createAndSetElement("span", {
      text: "id",
    });
    const idTextInput = createAndSetElement("input", {
      id: "id-value",
    });
    const classSpan = createAndSetElement("span", {
      text: "class",
    });
    const classTextInput = createAndSetElement("input", {
      id: "class-value",
    });
    const querySpan = createAndSetElement("span", {
      text: "query",
    });
    const queryTextInput = createAndSetElement("input", {
      id: "query-value",
    });

    insertElement(idBox, [idSpan, idTextInput]);
    insertElement(classBox, [classSpan, classTextInput]);
    insertElement(queryBox, [querySpan, queryTextInput]);
    insertElement(inputBox, [idBox, classBox, queryBox]);
    insertElement($container, inputBox);
  };

  const setBtn = () => {
    const btnBox = createElement("div");

    const BgColorBtnBox = createElement("div");
    const BgBtnList = [];
    for (const color of bgColorClassList) {
      const newBtn = createAndSetElement("button", {
        id: color,
        text: `set ${color}`,
      });
      BgBtnList.push(newBtn);
      allBtnList.push(newBtn);
    }

    const textBtnBox = createElement("div");
    const textStyleList = [];
    for (const textStyle of textStyleClassList) {
      const newBtn = createAndSetElement("button", {
        id: textStyle,
        text: `set ${textStyle}`,
      });
      textStyleList.push(newBtn);
      allBtnList.push(newBtn);
    }

    const resetBtn = createAndSetElement("button", {
      id: "reset",
      text: `set Reset style`,
    });
    allBtnList.push(resetBtn);

    insertElement(BgColorBtnBox, BgBtnList);
    insertElement(textBtnBox, textStyleList);
    insertElement(btnBox, [BgColorBtnBox, textBtnBox, resetBtn]);
    insertElement($container, btnBox);
  };

  const changeClass = (e, btn) => {
    const idElement = document.querySelector("#id-value");
    const classElement = document.querySelector("#class-value");

    const idValue = idElement.value === "" ? "" : `#id-${idElement.value}`;
    const classValue =
      classElement.value === "" ? "" : `.${classElement.value}`;
    const queryElement = document.querySelector("#query-value");
    const queryValue =
      queryElement.value === "" ? "wrong-query" : queryElement.value;

    let queryTargetList = document.querySelectorAll(queryValue);

    if (idValue !== "") {
      queryTargetList = document.querySelectorAll(idValue);
    } else if (classValue !== "") {
      queryTargetList = document.querySelectorAll(classValue);
    }

    if (queryTargetList === null) {
      return;
    }

    for (const target of queryTargetList) {
      if (btn.id === "reset") {
        target.className = "test";
        continue;
      }

      const targetClassName = target.className.split(" ");
      const newClassName = targetClassName.map((value) => {
        if (value.includes("bg") && btn.id.includes("bg")) {
          return "";
        }
        if (value.includes("text") && btn.id.includes("text")) {
          return "";
        }

        return value;
      });
      newClassName.push(btn.id);
      target.className = newClassName.join(" ");
    }
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomClass = () => {
    const bgIndex = getRandomInt(3);
    const bgClass = bgColorClassList[bgIndex];

    const textStyleIndex = getRandomInt(4);
    const textClass = textStyleClassList[textStyleIndex];

    return `${bgClass} ${textClass} test`;
  };

  const load = () => {
    $container.classList.add(container);

    for (let i = 1; i <= 16; i++) {
      const newClass = getRandomClass();
      const newElement = createAndSetElement("div", {
        id: `id-${i}`,
        className: newClass,
        text: i,
      });
      boxList.push(newElement);
    }

    insertElement($container, boxList);

    setInput();
    setBtn();

    for (const btn of allBtnList) {
      btn.addEventListener("click", (e) => {
        changeClass(e, btn);
      });
    }
  };

  window.addEventListener("load", load);
}

export{directDomControl}

