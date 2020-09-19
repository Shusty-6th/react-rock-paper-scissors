import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GameContext } from "../GameContext";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames"; // npm install classnames
import "./styles/HandButton.scss"

function HandButton({ hand, isDisabled, isCpuHand, hide }) {
  const { playerChooseHand, selectedHand } = useContext(GameContext);

  const isThisHandSelected = hand === selectedHand;
  const ico = hand?.ico ?? faSpinner;

  return (
    <button
      className={classNames("btnHand", {
        hide: hide,
        cpuSelected: isCpuHand,
        selected: isThisHandSelected && !isCpuHand,
        [hand?.name]: hand?.name,
      })}
      onClick={() => playerChooseHand(hand)}
      disabled={isDisabled}
    >
      <FontAwesomeIcon
        className="gameIco"
        icon={ico}
        spin={ico === faSpinner}
      />
    </button>
  );
}

export default HandButton;
