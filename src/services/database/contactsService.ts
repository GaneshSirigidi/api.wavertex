import { injectable } from "inversify";
import { contactGroups, contacts } from "../../schemas/contactSchema";
import { dbClient } from "../../db/client";

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
        const contactGroupData = await dbClient
            .insert(contactGroups)
            .values(data)
            .returning();
        return contactGroupData;
    }

    async listContacts(){
        const contactsData = await dbClient
            .select()
            .from(contacts)
        return contactsData;
    }
}

export default ContactsService;