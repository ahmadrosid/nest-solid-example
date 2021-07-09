import { HttpModule, Module } from '@nestjs/common';
import { GithubRepository } from './git/github.repository';
import { GitlabRepository } from './git/gitlab.repository';
import { GitRepositoryService } from './git/git-repository.service';

const gitRepository = process.env.provider == "GITHUB" ? GithubRepository : GitlabRepository
console.log(process.env.provider);

@Module({
    imports: [HttpModule],
    providers: [{
        provide: GitRepositoryService,
        useClass: gitRepository
    }],
    exports: [GitRepositoryService]
})
export class SharedModule {}
