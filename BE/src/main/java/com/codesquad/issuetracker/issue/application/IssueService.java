package com.codesquad.issuetracker.issue.application;

import com.codesquad.issuetracker.issue.domain.Issue;
import com.codesquad.issuetracker.issue.domain.IssueId;
import com.codesquad.issuetracker.issue.domain.IssueRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;

    public Issue createIssue(Issue issue) {
        Issue newIssue = Issue.of(nextId(), issue);
        return issueRepository.save(newIssue);
    }

    public IssueId nextId() {
        return new IssueId(issueRepository.count() + 1);
    }

    public void changeStatus(IssueId issueId) {
        Issue issue = findIssueById(issueId);
        issue.changeStatus();
        issueRepository.save(issue);
    }

    public Issue findIssueById(IssueId issueId) {
        return issueRepository.findById(issueId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 이슈입니다!"));
    }
}
