import React, { useState, useEffect } from "react";
import styles from "./Botao.module.css";

function Botao() {
	const [disabled, setDisabled] = useState(false);
	const [nome, setNome] = useState("Enviar");

	const handleClick = (e) => {
		e.preventDefault();
		setDisabled(true);
		setNome("Enviando...");
		setTimeout(() => {
			setDisabled(false);
			setNome("Enviar");
		}, 3000);
	};

	return (
		<>
			<button
				type="submit"
				disabled={disabled}
				className={styles.input4}
				onClick={handleClick}
			>
				{nome}
			</button>
			<p>Você clicou {null} vezes!</p>
		</>
	);
}

export default Botao;