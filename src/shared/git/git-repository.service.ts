import { Observable } from "rxjs"

export abstract class GitRepositoryService {
    abstract getAvatar(username: string): Observable<string>
}
