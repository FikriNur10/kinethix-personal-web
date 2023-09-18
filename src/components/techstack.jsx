import "../App.css";
import { Tooltip } from "@material-tailwind/react";

const TechStack = [
  {
    id: 1,
    name: "HTML5",
    icon: "fab fa-html5 fa-2x",
    placement: "left",
  },
  {
    id: 2,
    name: "CSS3",
    icon: "fab fa-css3-alt fa-2x",
    placement: "top",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "fab fa-js-square fa-2x",
    placement: "top",
  },
  {
    id: 4,
    name: "ReactJS",
    icon: "fab fa-react fa-2x",
    placement: "top",
  },
  {
    id: 5,
    name: "PHP",
    icon: "fab fa-php fa-2x",
    placement: "top",
  },
  {
    id: 6,
    name: "Laravel",
    icon: "fa-brands fa-laravel fa-2x",
    placement: "right",
  },
  {
    id: 7,
    name: "Codeigniter",
    icon: "fa-solid fa-fire fa-2x",
    placement: "left",
  },
  {
    id: 8,
    name: "MySQL",
    icon: "fa-solid fa-database fa-2x",
    placement: "bottom",
  },
  {
    id: 9,
    name: "Git",
    icon: "fa-brands fa-git-alt fa-2x",
    placement: "bottom",
  },
  {
    id: 10,
    name: "Node Js",
    icon: "fa-brands fa-node-js fa-2x",
    placement: "bottom",
  },
  {
    id: 11,
    name: "Figma",
    icon: "fa-brands fa-figma fa-2x",
    placement: "bottom",
  }
];

const Technologies = () => (
  <>
    {TechStack.map((TechStack) => (
      <Tooltip key={TechStack.id} content={TechStack.name} placement={TechStack.placement} id="toolTip" className="max-sm:hidden">
        <div id="techBox" className="max-sm:w-6 max-sm:h-6">
          <i className={TechStack.icon}></i>
        </div>
      </Tooltip>
    ))}
  </>
);

export default Technologies;
