import {HttpClient} from "../../../libs/HttpClient";
import {type FoodAnalysisResponse} from "./type";


export class UploadService {
    private httpClient: HttpClient;
    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async uploadFile(file: File): Promise<FoodAnalysisResponse> {
        try {
            const response = await this.httpClient.uploadFile<FoodAnalysisResponse, unknown>(
                '/analyze-food',
                file,
                undefined,
            );
            return response;
        } catch (error) {
            console.error('File upload failed:', error);
            throw error;
        }
    }
}