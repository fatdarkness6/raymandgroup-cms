/**
 * tech-lab controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::tech-lab.tech-lab",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = {
        Sections: {
          on: {
            "hero-section.hero-tech-lab": {
              populate: {
                overlayImage: {
                  populate: {
                    image: true,
                  },
                },
              },
            },
            "content-section.content-tech-lab": {
              populate: {
                visionAndMission: {
                  populate: {
                    image: true,
                  },
                },
                overlayImage: {
                  populate: {
                    image: true,
                  },
                },
                buttons: true,
              },
            },
          },
        },
      };

      return await super.find(ctx);
    },
  }),
);
