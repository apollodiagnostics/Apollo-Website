import { MASTER_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Google } from '../entity/google_rating.entity';
import { GoogleDto } from '../dto/google_rating.dto';

export class RatingRepository {
    async getAllGoogleRating(options: GoogleDto): Promise<Google[]> {
        const rating = await Google.findAll({
            ...(options.id && { where: { id: options.id } }),
            attributes: { exclude: ['created_at', 'updated_at'] },
            limit: options.limit || 1000,
            offset: options.offset || 0,
        });
        return rating;
    }

    async getAllGoogleRatingById(id: number) {
        const rating = await Google.findOne({
            where: { id },
            attributes: { exclude: ['created_at', 'updated_at', 'date'] },
        });
        if (!rating) {
            throw new HttpExceptionWrapper(
                MASTER_ERROR.GOOGLE_RATING_NOT_FOUND,
            );
        }
        return rating;
    }
}
