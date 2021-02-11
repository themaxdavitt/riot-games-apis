import OpenAPIClientAxios from 'openapi-client-axios';
import { OpenAPIV3 } from 'openapi-types';

import { Client } from './client';
import def from './openapi-3.0.0.json';

export const definition = def as unknown as OpenAPIV3.Document;

export function createClient(token: string, server: string): Client {
	const api = new OpenAPIClientAxios({
		definition,
		axiosConfigDefaults: {
			headers: {
				'X-Riot-Token': token
			}
		}
	});
	api.withServer({ url: `https://${server}.api.riotgames.com` });
	return api.initSync();
}
