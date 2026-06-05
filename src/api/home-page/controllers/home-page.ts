/**
 * home-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async find(ctx) {
      ctx.query.populate = {
        Sections: {
          on: {
            "hero-section.hero-home-page": {
              populate: {
                Intro: true,
              },
            },

            "content-section.content-home-page": {
              populate: {
                IntroductionAboutCompanies: {
                  populate: {
                    Intro: true,
                  },
                },

                card: {
                  populate: {
                    companiesImage: true,
                  },
                },
              },
            },
            "news.news": {
              populate: {
                IntroductionForNews: true,
                NewsCard: {
                  populate: {
                    image: true,
                    Intro: true,
                  },
                },
              },
            },
          },
        },
      };

      return await super.find(ctx);
    },
  }),
);
