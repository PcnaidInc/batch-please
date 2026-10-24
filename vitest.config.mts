import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		poolOptions: {
			workers: {
				// The local pool cannot resolve the production Workers AI binding.
				wrangler: { configPath: './wrangler.test.jsonc' },
			},
		},
	},
});
