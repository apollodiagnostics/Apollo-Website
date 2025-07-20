import { Injectable } from '@nestjs/common';
import { GoogleDto } from '../dto/google_rating.dto';
import { Google } from '../entity/google_rating.entity';
import { RatingRepository } from '../repository/google_rating.repository';

@Injectable()
export class RatingService {
    constructor(private readonly ratingRepository: RatingRepository) {}

    async getAllGoogleRating(options: GoogleDto): Promise<Google[]> {
        const rating = await this.ratingRepository.getAllGoogleRating(options);
        return rating;
    }
    async getAllGoogleRatingById(id: number) {
        const rating = await this.ratingRepository.getAllGoogleRatingById(id);
        return { rating };
    }
}
