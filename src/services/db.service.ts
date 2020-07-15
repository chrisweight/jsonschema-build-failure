import pouchdbAdapterIdb from 'pouchdb-adapter-idb';
import {
  addRxPlugin,
  createRxDatabase
} from 'rxdb';
import { RxDBAttachmentsPlugin } from 'rxdb/plugins/attachments';
import { RxDBQueryBuilderPlugin } from 'rxdb/plugins/query-builder'
import { RxDBReplicationGraphQLPlugin } from 'rxdb/plugins/replication-graphql';
import { RxDBValidatePlugin } from 'rxdb/plugins/validate'

addRxPlugin(pouchdbAdapterIdb);
addRxPlugin(RxDBReplicationGraphQLPlugin);
addRxPlugin(RxDBAttachmentsPlugin);
addRxPlugin(RxDBValidatePlugin);
addRxPlugin(RxDBQueryBuilderPlugin);

let RXDB_ADAPTER = 'idb';

export class Database {

  private static _instance: Database;

  readonly name = `test_project`;
  protected db;

  private constructor() {

  }

  async init() {
    this.db = await createRxDatabase({
      name: this.name,
      adapter: RXDB_ADAPTER,
      multiInstance: false
    });
  }

  public static instance() {
    if (!Database._instance) {
      Database._instance = new Database();
    }

    return Database._instance;
  }
}
