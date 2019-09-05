const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacto: [],
			newContact: {
				full_name: null,
				agenda_slug: "mmayoragenda",
				email: null,
				phone: null,
				address: null
			}
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()

			addContacto: (name, email, phone, address) => {
				const store = getStore();
				setStore({
					newContact: {
						full_name: name,
						agenda_slug: "mmayoragenda",
						email: email,
						phone: phone,
						address: address
					}
				});
				let contactoTemp = store.newContact;

				fetch("https://3000-f328dc25-2650-4bb1-8039-6c2134bf458d.ws-us1.gitpod.io/add_contact", {
					method: "POST", // or 'PUT'
					body: JSON.stringify(contactoTemp), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(setStore({ contacto: store.contacto.concat(contactoTemp) }));
			},

			editContacto: (name, email, phone, address, id) => {
				const store = getStore();
				setStore({
					newContact: {
						full_name: name,
						agenda_slug: "mmayoragenda",
						email: email,
						phone: phone,
						address: address
					}
				});
				let contactoTemp = store.newContact;
				console.log(contactoTemp);

				//  https://3000-f328dc25-2650-4bb1-8039-6c2134bf458d.ws-us1.gitpod.io/update_contact/12
				fetch("https://3000-f328dc25-2650-4bb1-8039-6c2134bf458d.ws-us1.gitpod.io/update_contact/" + id, {
					method: "PUT", // or 'PUT'
					body: JSON.stringify(contactoTemp), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				}).then(response => response.json());
				// .then(setStore({ contacto: store.contacto.concat(contactoTemp) }));
			},

			delContacto: idContacto => {
				debugger;
				const store = getStore();
				let temp1 = store.contacto;
				let temp2 = temp1.filter(item => item.id !== idContacto);
				setStore({ contacto: temp2 });
				fetch(
					"https://3000-f328dc25-2650-4bb1-8039-6c2134bf458d.ws-us1.gitpod.io/delete_contact/" + idContacto,
					{
						method: "DELETE", // or 'PUT'
						// body: JSON.stringify(temp2), // data can be `string` or {object}!
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
			}
		}
	};
};

export default getState;
