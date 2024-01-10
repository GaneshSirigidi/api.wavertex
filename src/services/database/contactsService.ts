import { injectable } from "inversify";
import { contactGroups, contacts } from "../../schemas/contactSchema";
import { dbClient } from "../../db/migrate";

@injectable()
class ContactsService {

    async createContact(data:any) {
        const addContactData = await dbClient
            .insert(contacts)
            .values(data)
            .returning();
        return addContactData;
    }

    async createContactGroup(data:any) {
        const addContactData = await dbClient
            .insert(contactGroups)
            .values(data)
            .returning();
        return addContactData;
    }
}

export default ContactsService;