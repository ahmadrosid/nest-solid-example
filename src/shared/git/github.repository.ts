import { HttpService, Injectable } from "@nestjs/common"
import { map } from "rxjs/operators"
import { Observable } from "rxjs"
import { GitRepositoryService } from "./git-repository.service"

interface GithubEntity {
    avatar_url: string
}

@Injectable()
export class GithubRepository extends GitRepositoryService {
    private mainUrl = "https://api.github.com"

    constructor(private http: HttpService) { super() }

    getAvatar(username: string): Observable<string> {
        return this.http
            .get<GithubEntity>(`${this.mainUrl}/users/${username}`)
            .pipe(map(res => res.data.avatar_url))
    }
}
