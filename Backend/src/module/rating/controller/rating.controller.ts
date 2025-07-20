import { Controller, Get, Param, Query } from '@nestjs/common';
import { Response as ResponseCustom } from 'src/utils/response/response.decorator';
import { GoogleDto } from '../dto/google_rating.dto';
import { RatingService } from '../service/rating.service';
import { responseName } from 'src/constants/response';

@Controller()
export class RatingController {
    constructor(private readonly ratingService: RatingService) {}

    @Get(':id')
    @ResponseCustom(responseName.GET_ALL_GOOGLE_RATING)
    async getAllGoogleRatingById(@Param() param: GoogleDto) {
        return await this.ratingService.getAllGoogleRatingById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_GOOGLE_RATING)
    async getAllGoogleRating(@Query() rating: GoogleDto) {
        return await this.ratingService.getAllGoogleRating(rating);
    }
}
