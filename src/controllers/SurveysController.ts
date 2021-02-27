import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";


class SurveysController {
    async create(request, response) {
        const { title, description} = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        });

        await surveysRepository.save(survey);

        return response.status(201).json(survey);
    }

    async show(request, response) {

        const surveysRepository = getCustomRepository(SurveysRepository);
        
        const all = await surveysRepository.find();

        return response.json(all);
    }
}

export { SurveysController }