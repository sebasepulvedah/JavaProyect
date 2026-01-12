// transactions.js

$(document).ready(function() {
    // Inicializar contactos en localStorage si no existen
    if (!localStorage.getItem("contacts")) {
        const initialContacts = [
            { nombre: "John Doe", cbu: "123456789", alias: "john.doe", banco: "ABC Bank" },
            { nombre: "Jane Smith", cbu: "987654321", alias: "jane.smith", banco: "XYZ Bank" }
        ];
        localStorage.setItem("contacts", JSON.stringify(initialContacts));
    }

    // Función para obtener contactos desde localStorage
    function getContacts() {
        return JSON.parse(localStorage.getItem("contacts")) || [];
    }

    // Función para guardar contactos en localStorage
    function saveContacts(contacts) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }

    // Renderizar contactos en la lista
    function renderContacts(filter = "") {
        const contacts = getContacts();
        const list = $("#contactList");
        list.empty();

        contacts
            .filter(c => c.nombre.toLowerCase().includes(filter.toLowerCase()))
            .forEach(contact => {
                const li = $(`
                    <li class="list-group-item">
                        <div class="contact-info">
                            <strong>${contact.nombre}</strong><br>
                            <small>CBU: ${contact.cbu}, Alias: ${contact.alias}, Banco: ${contact.banco}</small>
                        </div>
                    </li>
                `);
                list.append(li);
            });

        if (list.children().length === 0) {
            list.append('<li class="list-group-item text-muted">No se encontraron contactos</li>');
        }
    }

    // Filtrar contactos en tiempo real
    $("#contacto").on("input", function() {
        renderContacts($(this).val());
    });

    // Enviar dinero
    $("#sendBtn").click(function() {
        const contacto = $("#contacto").val().trim();
        const cantidad = parseFloat($("#cantidad").val());

        if (!contacto || isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingresa un contacto válido y un monto mayor a 0.");
            return;
        }

        // Guardar la transacción en localStorage
        const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
        transactions.push({
            contacto: contacto,
            cantidad: cantidad,
            fecha: new Date().toLocaleString()
        });
        localStorage.setItem("transactions", JSON.stringify(transactions));

        alert(`Se enviaron $${cantidad.toFixed(2)} a ${contacto} correctamente.`);

        // Limpiar campos
        $("#contacto").val("");
        $("#cantidad").val("");
        renderContacts();
    });

    // Agregar nuevo contacto
    $("#addContactBtn").click(function() {
        const nombre = prompt("Nombre del contacto:");
        const cbu = prompt("CBU del contacto:");
        const alias = prompt("Alias del contacto:");
        const banco = prompt("Banco del contacto:");

        if (!nombre || !cbu || !alias || !banco) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const contacts = getContacts();
        contacts.push({ nombre, cbu, alias, banco });
        saveContacts(contacts);
        renderContacts();
    });

    // Inicializar lista al cargar
    renderContacts();
});
