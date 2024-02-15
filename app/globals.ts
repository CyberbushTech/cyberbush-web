declare global {
    namespace NodeJS {
        interface Global {
            Config: {
							menu: [
								{ title: "Fortuna", id: "fortuna" },
								{ title: "Condor", id: "condor" },
								{ title: "Beetle", id: "beetle" },
								{ title: "Ecosystem", id: "ecosystem" },
								{ title: "Company", id: "company" },
							];
						}
        }
    }
}
export default global; 