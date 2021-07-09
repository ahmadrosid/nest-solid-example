import { HttpService, Injectable } from "@nestjs/common"
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { GitRepositoryService } from "./git-repository.service"

interface GitlabEntity {
    avatar_url: string;
}

@Injectable()
export class GitlabRepository extends GitRepositoryService {
    private mainUrl = "https://gitlab.com/api/v4/"

    constructor(private http: HttpService) { super() }

    getAvatar(username: string): Observable<string> {
        return this.http
            .get<GitlabEntity[]>(`${this.mainUrl}/users?username=${username}`)
            .pipe(map(res => res.data[0]?.avatar_url))
    }
}
